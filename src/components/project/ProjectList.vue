<template>
  <div class='flex panel panel-primary'>
    <article class='span panel-body'>
      <criteria-paged :model='model' @condition-changed='search' :pager='false' v-ref:paged>
        <criteria partial='criteria'>
          <div novalidate class="form-inline auto" partial>
            <div class="form-group">
              <label class="sr-only" for="ProjectName">项目名称</label>
              <input type="text" class="form-control" id="ProjectName" placeholder="请输入项目名称"
                v-model="model.f_name" v-on:keyup.enter="search"
                condition="f_name like '{}%'" defaultvalue="'13'">
            </div>
            <button class="btn btn-default" @click="search()">查询</button>
            <button class='btn btn-primary' @click="$goto('project-form')">新项目</button>
          </div>
        </criteria>
        <tree :model="model.rows" url='rs/sql/subproject.sql' partial="list" v-ref:tree>
          <span partial>
            {{ row.data.f_name }}
            <button class="badge pull-right" v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button>
            <button class="badge pull-right" v-if='isSelected(row)' @click='$goto("project-form", {parent: row.data})'>子项目</button>
          </span>
        </tree>
      </criteria-paged>
    </article>
    <footer class='panel-footer'>
      共{{model.rows.length}}项
    </footer>
  </div>
</template>

<script>
import { TreeList } from 'vue-client'

export default {
  data () {
    return {
      model: new TreeList('/rs/sql/project.sql')
    }
  },
  computed: {
    selected () {
      return this.$refs.paged.$refs.tree.selected
    }
  },
  methods: {
    search () {
      this.model.search('1=1', {})
    }
  }
}
</script>
