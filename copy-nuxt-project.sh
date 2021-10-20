# run "git add --chmod=+x copy-nuxt-project.sh" to make the file executeable when update
cd '../team-uitbehandeld-strapi/public/' && rm -rv !("uploads") && cp -R '../../team-uitbehandeld/dist/.' .
exit