module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  // daisyuiを使うよ
  plugins: [require("daisyui")],
  // daisyuiのテーマを統一させるためのコード
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}