# run "git add --chmod=+x copy-nuxt-project.sh" to make the file executeable when update
cd '../team-uitbehandeld-strapi/public/' && rm -rv !('uploads') && cp -Rv '../../team-uitbehandeld/dist/.' .
cd '../../team-uitbehandeld/'
exit