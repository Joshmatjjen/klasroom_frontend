npm install 

npm run build

npm run generate

rm -fr /var/www/html/klasroom-web/*

mv dist/* /var/www/html/klasroom-web

pm2 start npm -- start
