
export default {
    async updateCart(ctx) {
      const { data } = await Promise.resolve().then(function(res){
          return { data: { length: 2 }};
      })
      ctx.commit('addCart', {
        count: data.length || 0
      })
    }
  }
