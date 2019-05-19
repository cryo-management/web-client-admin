<template>
  <div>
    <div class="main">
      <router-link class="item" to="/admin/languages">
        <span class="name">Languages</span>
      </router-link>
      <router-link class="item" to="/admin/users">
        <span class="name">Users</span>
      </router-link>
      <router-link class="item" to="/admin/groups">
        <span class="name">Groups</span>
      </router-link>
      <router-link class="item" to="/admin/trees">
        <span class="name">Trees</span>
      </router-link>
      <router-link class="item" to="/admin/schemas">
        <span class="name">Schemas</span>
      </router-link>
      <router-link class="item" to="/admin/currencies">
        <span class="name">Currencies</span>
      </router-link>
      <router-link class="item" to="/admin/lookups">
        <span class="name">Lookups</span>
      </router-link>
      <router-link class="item" to="/admin/widgets">
        <span class="name">Widgets</span>
      </router-link>
      <router-link class="item" to="/admin/jobs">
        <span class="name">Jobs</span>
      </router-link>
      <router-link class="item" to="/admin/jobs/instances">
        <span class="name">Job Instances</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style>
.aside {
  display: block;
  /* background-color: #f9f9f9; */
  background: hsl(0, 0%, 21%);
  /* border-right: 1px solid #dedede; */
}
.aside .compose {
  height: 95px;
  margin: 0 -10px;
  padding: 25px 30px;
}
.aside .compose .button {
  color: #f6f7f7;
}
.aside .compose .button .compose {
  font-size: 14px;
  font-weight: 700;
}
.aside .main {
  padding: 40px;
  color: #6f7b7e;
}
.aside .title {
  color: #6f7b7e;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
.aside .main .item {
  display: block;
  padding: 10px 0;
  color: #6f7b7e;
}
.aside .main .item.active {
  background-color: hsl(0, 0%, 96%);
  margin: 0 -52px;
  padding-left: 50px;
}
.aside .main .item:active,
.aside .main .item:hover {
  background-color: hsl(0, 0%, 96%);
  margin: 0 -52px;
  padding-left: 50px;
}
.aside .main .icon {
  font-size: 19px;
  padding-right: 30px;
  color: #a0a0a0;
}
.aside .main .name {
  font-size: 15px;
  color: #f1f1f1;
  /* color: #5d5d5d; */
  font-weight: 500;
}
.aside .main .item:hover .name {
  color: hsl(0, 0%, 21%);
}
</style>
