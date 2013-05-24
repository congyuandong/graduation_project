#coding=utf-8
import pymongo
import os,sys
import simplejson as json

conn = pymongo.Connection("127.0.0.1",27017)
db = conn.test
db.authenticate('cyd','123')
dbappinfo = db.appinfo
#新增用户表
dbappnewuser = db.appnewuser
#用户渠道表
dbappchannel = db.appchannel
#应用网络表
dbappnetwork = db.appnetwork
#应用版本表
dbappversion = db.appversion


#返回应用名称列表
def findAppList():
	applist = dbappinfo.distinct("AppId")
	return applist

#返回应用渠道列表
def findChannelList():
	appchannellist = dbappinfo.distinct("AppChannel")
	return appchannellist

#返回应用版本列表
def findVersionLIst():
	appversionlist = dbappinfo.distinct("versionName")
	appversionlist.sort()
	return appversionlist

#统计每个应用新增用户
def staNewUser(applist):
	for appid in applist:
		print 'do with ',appid
		#print dbappinfo.find({"AppId":appid,"network":"WIFI"}).count()
		#print dbappinfo.find({"AddId":appid}).count()
		#appnewuser.insert({'appid':appid,'newuser':dbappinfo.find({"AddId":appid}).count()})

#统计每个应用的渠道情况
def staChannel(applist,appchannellist):
	dbappchannel.remove()
	print 'remove all from dbappchannel'
	for appid in applist:
		for appchannel in appchannellist:
			channelcount = dbappinfo.find({"AppId":appid,"AppChannel":appchannel}).count()
			#print appid,appchannel,channelcount
			dbappchannel.insert({"AppId":appid,"AppChannel":appchannel,"ChannelCount":channelcount})
	print 'finish insert into dbappchannel'

#统计应用版本
def staVersion(applist,appversionlist):
	dbappversion.remove()
	print 'remove all from dbappversion'
	for appid in applist:
		for appversion in appversionlist:
			versioncount = dbappinfo.find({"AppId":appid,"versionName":appversion}).count()
			#print appid,appversion,versioncount
			dbappversion.insert({"AppId":appid,"AppVersion":appversion,"VersionCount":versioncount})
	print 'finish insert into dbappversion'

#统计网络类型
def staNetWork(applist):
	dbappnetwork.remove()
	print 'remove all from dbappnetwork'
	for appid in applist:
		countwifi = dbappinfo.find({"AppId":appid,"network":"WIFI"}).count()
		count2g = dbappinfo.find({"AppId":appid,"network":"2G"}).count()
		count3g = dbappinfo.find({"AppId":appid,"network":"3G"}).count()
		dbappnetwork.insert({"AppId":appid,"NetWork":"WIFI","NetWorkCount":countwifi})
		dbappnetwork.insert({"AppId":appid,"NetWork":"2G","NetWorkCount":count2g})
		dbappnetwork.insert({"AppId":appid,"NetWork":"3G","NetWorkCount":count3g})
	print 'finish insert into dbappnetwork'

if __name__ == '__main__':
	applist = findAppList()
	appchannellist = findChannelList()
	appversionlist = findVersionLIst()

	staChannel(applist,appchannellist)
	staNetWork(applist)
	staVersion(applist,appversionlist)
	
	#staNewUser(applist)
