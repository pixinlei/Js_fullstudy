from urllib import request

req_csdn = request.Request('https://blog.csdn.net/meteor_93')
req_csdn.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36')
html_csdn = request.urlopen(req_csdn).read().decode('utf-8')

read_num_csdn = etree.HTML(html_csdn).xpath('//*[@id="asideProfile"]/div[3]/dl[2]/dd/@title')[0]
fans_num_csdn = etree.HTML(html_csdn).xpath('//*[@id="fan"]/text()')[0]
rank_num_csdn = etree.HTML(html_csdn).xpath('//*[@id="asideProfile"]/div[3]/dl[4]/@title')[0]
like_num_csdn = etree.HTML(html_csdn).xpath('//*[@id="asideProfile"]/div[2]/dl[3]/dd/span/text()')[0]
