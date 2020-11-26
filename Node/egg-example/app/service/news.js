const Service = require('egg').Service;

class NewsService extends Service{
    async list(page = 1){
        const { serverUrl, pageSize } = this.config.news;
        const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
            data: {
              orderBy: '"$key"',
              startAt: `"${pageSize * (page - 1)}"`,
              endAt: `"${pageSize * page - 1}"`,
            },
            dataType: 'json',
          });
        const newsList = await Promise.all(
            Object.keys(idList).map(key=>{
                const url = `${serverUrl}/item/${idList[key]}.json`;
                return this.ctx.curl(url, { dataType: 'json' });
                //框架在应用初始化的时候，会自动将 HttpClient 初始化到 app.httpclient。 
                //同时增加了一个 app.curl(url, options) 方法，它等价于 app.httpclient.request(url, options)
            })
        );
        return newsList.map(res=>res.data);

    }
}
module.exports = NewsService;