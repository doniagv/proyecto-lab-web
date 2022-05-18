FROM nginx
COPY build /usr/share/nginx/html
COPY docker/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]