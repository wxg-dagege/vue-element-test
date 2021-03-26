<template>
  <el-table :data="tabledata" height="300">
    <el-table-column label="喜欢" prop="one"/>
    <el-table-column label="痛苦" prop="two" />
    <el-table-column label="烦心" prop="three" />
    <el-table-column label="嘻嘻" prop="four" />
    <el-table-column label="哈哈" prop="five" />
    <infinite-loading slot="append"
      @infinite="infiniteHandler"
      force-use-infinite-wrapper=".el-table__body-wrapper"></infinite-loading>     
  </el-table>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    infiniteHandler($state) {
      console.log($state);
      if(this.tabledata.length < 100) {
        this.axios.get("http://localhost:3000/").then(response => {
          this.tabledata.push(response.data);
          $state.loaded();
        })
      }
      else
      {
        $state.error();
      }
    }
  },
  data() {
    return {
      tabledata:[
        {
          one: "123",
          two: "123",
          three: "123",
          four: "123",
          five: "123"
        },
        {
          one: "123",
          two: "123",
          three: "123",
          four: "123",
          five: "123"
        },
        {
          one: "123",
          two: "123",
          three: "123",
          four: "123",
          five: "123"
        },{
          one: "123",
          two: "123",
          three: "123",
          four: "123",
          five: "123"
        },{
          one: "123",
          two: "123",
          three: "123",
          four: "123",
          five: "123"
        },{
          one: "123",
          two: "123",
          three: "123",
          four: "123",
          five: "123"
        },{
          one: "123",
          two: "123",
          three: "123",
          four: "123",
          five: "123"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
