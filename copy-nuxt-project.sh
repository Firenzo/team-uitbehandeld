# run "git add --chmod=+x copy-nuxt-project.sh" to make the file executeable when update
# cd '../team-uitbehandeld-strapi/public/' && find * -maxdepth 0 -name 'uploads' -prune -o -exec rm -rv '{}' ';' && cp -Rv '../../team-uitbehandeld/dist/.' .
cd '../team-uitbehandeld-strapi/public/' && find * -maxdepth 0 -name 'uploads' -prune -o -exec rm -rv '{}' ';'
cd '../../team-uitbehandeld/'
exit