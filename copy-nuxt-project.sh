# run "git add --chmod=+x copy-nuxt-project.sh" to make the file executeable when update
rm -r ../team-uitbehandeld-strapi/public/*
cp -R dist/. '../team-uitbehandeld-strapi/public/'
exit