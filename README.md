<h1><a id="mt4eawebinterface_0"></a>mt4-ea-web-interface</h1>
<p>Web interface for Metatrader  EA in order to control the ea from simple web page</p>
<p>Setup:<br>
+Install Nodejs on Ubuntu machine , wine 32 bit and mt4…<br>
+Integerate your expert with agent EA_Agent.mq4<br>
+Run the mt4 on linux and attach the expert to the mt4  ( you have to enable the dll imports in mt4)<br>
+run the nodejs server<br>
nohup node webserver.js &amp;<br>
+Enable port 3000 from the firewall:<br>
sudo firewall-cmd --zone=public --permanent --add-port=3000/tcp</p>
<p>Then browse your ea controller from  http://vps_ip:3000/ea-web and enjoy</p>
