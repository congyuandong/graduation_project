#coding=utf-8
import pymongo
import os
import sys
import locale
import string
import re,shutil,time,datetime
import simplejson as json

sleeptime = 1
conn = pymongo.Connection("127.0.0.1",27017)
db = conn.test
db.authenticate('cyd','123')
sourceFilePath = '/home/congyuandong/Yunio/byebye/server'
appinfo = db.appinfo
appinfo.remove()

def readFiles():
	for fileName in os.listdir(sourceFilePath):
		if fileName.endswith('.o'):
			print 'do with file',fileName
			result = {}
			file_object = open(fileName,'r')
			while True:
				perLine = file_object.readline()
				if not perLine:
					break
				perLine = perLine.strip('\n')
				dictinfo = json.loads(perLine)
				if 'Time' in dictinfo:
					#print dictinfo['Time']
					time_t = time.strptime(dictinfo['Time'],"%Y-%m-%d %X")
					#print time_t
					datetime_t = datetime.datetime(*time_t[:6])
					dictinfo['Time'] = datetime_t;
					#print datetime_t
				else :
					dictinfo['Time'] = datetime.datetime.now()
				appinfo.insert(dictinfo)
			#shutil.move(fileName,fileName+'.old')

if __name__=="__main__":
	#print("main")
	#for i in db.users.find():
	#	print i
	while True:
		readFiles()
		time.sleep(sleeptime)
