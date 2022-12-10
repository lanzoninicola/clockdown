FROM traefik:v2.9.5

# copy the routing-conf folder into /etc/traefik
COPY routing-conf/* /etc/traefik/

COPY traefik.yml /etc/traefik/traefik.yml

# expose the ports for traffic to the webserver
EXPOSE 443 443

# expose the ports for traffic to the webserver
EXPOSE 80 80

# expose the ports for the dashboard and the webserver
EXPOSE 8080 8080

# start traefik
CMD ["--configfile=/etc/traefik/traefik.yml"]




