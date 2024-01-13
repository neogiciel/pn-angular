FROM httpd:2.4
COPY  ./pn/ /usr/local/apache2/htdocs/
RUN ls -laR /usr/local/apache2/htdocs/*
