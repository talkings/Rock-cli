#! /bin/sh
pm2 install pm2-logrotate
pm2 install pm2-intercom
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:max_size 500M