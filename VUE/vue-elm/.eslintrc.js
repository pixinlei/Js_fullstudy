module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: [
      error-prevention
     
      'plugin:vue/essential', 
     
      'standard'
    ],
    
    plugins: [
      'vue'
    ],
    
    rules: {
      
      'generator-star-spacing': 'off',
      
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }
  