from socket import *

def writeData(data):
	file_object = open('appdata','a')
	file_object.write(data)
	file_object.close

# def readData():
# 	file_object = open('gpsdata','r')
# 	mLines = file.read()
# 	targetLine = mLines[-1]
# 	return targetLine

myHost = ''
myPort = 52000
sockobj = socket(AF_INET,SOCK_STREAM)
sockobj.bind((myHost,myPort))
sockobj.listen(50)
while True:
	connection,address = sockobj.accept()
	print 'a new client connect',address
	while True:
		data = connection.recv(1024)
		if not data : break
		# connection.send('Echo=>'+data)
		print 'recv data =>',data
		writeData(data)
	connection.close()
