sudo docker-compose -f docker-compose.yml up --build -d

rm -fr /var/www/html/klasroom-web/*

mv build/* /var/www/html/klasroom-web
