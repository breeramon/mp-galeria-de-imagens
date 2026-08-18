import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // As fotos continuam morando na pasta "assets/" na raiz do projeto
  // (a mesma pasta que já existia no projeto antigo). O Vite serve
  // tudo que está aqui como se fosse a raiz do site, então uma foto em
  // assets/fotoMalu.jpeg é acessada como /fotoMalu.jpeg no código.
  publicDir: 'assets',
})
