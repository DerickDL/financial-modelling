FROM richarvey/nginx-php-fpm:3.1.6

# Install dependencies
RUN apk update && \
    apk add --no-cache \
        libzip-dev \
        $PHPIZE_DEPS && \
    pecl install redis && \
    docker-php-ext-enable redis && \
    apk add --no-cache nodejs npm && \
    apk del $PHPIZE_DEPS && \
    rm -rf /tmp/pear

COPY . .

# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

CMD ["/start.sh"]
