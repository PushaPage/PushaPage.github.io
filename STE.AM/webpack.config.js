let webpack = require('webpack'),
	    path = require('path'),
	    HtmlWebpackPlugin = require('html-webpack-plugin'), 
	    CopyWebpackPlugin = require('copy-webpack-plugin'),
	    CleanWebpackPlugin =  require ('clean-webpack-plugin').CleanWebpackPlugin,
	    MiniCssExtractPlugin = require('mini-css-extract-plugin'),	     
	    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
	    HtmlBeautifyPlugin = require('html-beautify-webpack-plugin'),
      ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
	     




require('dotenv-extended').config()


let ENV = process.env.APP_ENV;

let isTest = ENV === 'test';
let isProd = ENV === 'prod';

function setDevTool() {  
    if (isTest) {
      return 'inline-source-map';
    } else if (isProd) {
      return 'source-map';
    } else {
      return 'eval-source-map';
    }
}
let config = {

  entry: { 
  	index: __dirname + '/src/app/index.js',
  	main: __dirname + '/src/js/main.js'
  },  
  output: {
    path: __dirname + '/dist',    
    publicPath: '', 
    filename: 'js/[name].js',
  	crossOriginLoading: 'anonymous' 
  },  
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',          
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  devtool: 'cheap-module-eval-source-map',
  module: { 
    rules: [ 
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          '/node_modules/'
        ]
      },      
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
	        use: [
	                {
	                    loader: 'file-loader',
	                    options: {
	                        name: '[name].[ext]',
	                        context: path.resolve(__dirname, "/src/img"),
	                        outputPath: '/img',
	                        publicPath: '../img',
	                        useRelativePaths: true
	                    }
	                }
	            ] 
	        
	      	},    
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        	use: [
	                {
	                    loader: 'file-loader',
	                    options: {
	                        name: '[name]/[name].[ext]',
	                        context: path.resolve(__dirname, "/src/fonts/[name]"),
	                        outputPath: '/fonts',
	                        publicPath: '../fonts',
	                        useRelativePaths: true
	                    }
	                }
	            ]	    
      }, 
      {
        test: /\.(sass|scss)$/,
        use: [
        	'style-loader',
        	MiniCssExtractPlugin.loader,
        	{ 
        		loader: 'css-loader',
    			options: {sourceMap: true}
    		},
    		{ 
        		loader: 'postcss-loader',
    			options: {
    				sourceMap: true,
    				config: { path: './postcss.config.js'}
    			}
    		},
    		{ 
        		loader: 'sass-loader',
    			options: {sourceMap: true}
    		}
    	]        
      }      
    ]
  },
  plugins: [
  	new CleanWebpackPlugin(),
  	new MiniCssExtractPlugin({   
          filename: 'css/main.css'          
    }),
    new HtmlWebpackPlugin({        
      template: __dirname + "/src/public/index.html",     
      inject: 'body'
    }),
    new HtmlBeautifyPlugin({
        config: {
            html: {
                end_with_newline: true,
                indent_size: 2,
                indent_with_tabs: true,
                indent_inner_html: true,
                preserve_newlines: true,
                unformatted: ['p', 'i', 'b', 'span']
            }
        },
        replace: [ ' type="text/javascript"' ]
    }),  
    new webpack.SourceMapDevToolPlugin({
	  filename: '[file].map'	  
	}),
    new webpack.DefinePlugin({  
        API_KEY: JSON.stringify(process.env.API_KEY)
    })    
  ],
  devServer: {
      contentBase: './src/public',
      port: 7700,
      overlay: true,
  } 
}

                 
if (isProd) {
    config.plugins.push(
      
      new UglifyJSPlugin(),  		
      new ScriptExtHtmlWebpackPlugin({            
            defaultAttribute: 'defer'
      }),
        new CopyWebpackPlugin([
        	{ from: __dirname + '/src/public'},
      		{ from: __dirname + '/src/img', to: 'img'}      		
      ])
    );    
};

module.exports = config;   