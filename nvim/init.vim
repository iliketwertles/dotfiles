set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vimrc



call plug#begin()
Plug 'folke/tokyonight.nvim', { 'branch': 'main' }
Plug 'alaviss/nim.nvim'

call plug#end()

colorscheme tokyonight-night
