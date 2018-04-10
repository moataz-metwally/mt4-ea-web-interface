# mt4-ea-web-interface
Web interface for Metatrader  EA in order to control the ea from simple web page

Setup:
+Install Nodejs on Ubuntu machine , wine 32 bit and mt4...
+Integerate your expert with agent EA_Agent.mq4
+Run the mt4 on linux and attach the expert to the mt4  ( you have to enable the dll imports in mt4)
+run the nodejs server
  nohup node webserver.js &
+Enable port 3000 from the firewall:
  sudo firewall-cmd --zone=public --permanent --add-port=3000/tcp


Then browse your ea controller from  http://vps_ip:3000/ea-web and enjoy
