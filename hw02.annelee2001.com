
server {

        listen 80;

        listen [::]:80;

 

        root /home/newuser/www/hw02.annelee2001.com;

 

        index index.html;

 

        server_name hw02.annelee2001.com;

 

        location / {

                # First attempt to serve request as file, then

                # as directory, then fall back to displaying a 404.

                try_files $uri $uri/ =404;

        }

}
