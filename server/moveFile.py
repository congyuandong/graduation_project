import os,shutil,re,sys
import datetime,time

sourceFilePath = '/home/congyuandong/Desktop/testMoveFile/sourceFile/'
mFile = '/home/congyuandong/Desktop/testMoveFile/mFile/'
dbFile = '/home/congyuandong/Desktop/testMoveFile/dbFile/'

sleeptime = 1
timeout = 15
fileName_time = {}

while True:
	for fileName in os.listdir(sourceFilePath) :
		print fileName
		if fileName.endswith('.txt') :
			oldFile = sourceFilePath + fileName
			mnewFile = mFile + fileName
			dbnewFile = dbFile + fileName
			shutil.copy(oldFile,mnewFile)
			shutil.move(oldFile,dbnewFile)
			print 'has moved ',fileName
		else :
		# a file end with .tmp
		# if file's time > timeout mv .tmp to .txt 
			#print 'is a tmp'
			if fileName in fileName_time:
				#print 'in'
				timeNow=datetime.datetime.now()
				diffTime = timeNow - fileName_time[fileName]
				if diffTime.seconds >= timeout : 
					print 'timeout'
					oldFile = sourceFilePath + fileName
					newFile = sourceFilePath + fileName + '.txt'
					shutil.move(oldFile,newFile)
					del fileName_time[fileName]
					print 'has changed name %s to %s'%(oldFile,newFile)
			else:
				fileName_time[fileName] = datetime.datetime.now()
				print fileName_time
	time.sleep(sleeptime)
