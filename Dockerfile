FROM nginx

COPY ./dist/ /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/

WORKDIR /var/www
EXPOSE 80