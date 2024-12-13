<script lang="ts" setup>
const links: any[] = [
  { name: "About", url: "/about" },
  { name: "Experience", url: "/experience" },
  { name: "Contact", url: "/contact" },
];
</script>

<template>
  <nav>
    <div class="nav_inner">
      <NuxtLink
        class="home"
        to="/"
      >
        <IconsLogo class="logo" />
      </NuxtLink>

      <NuxtLink
        v-for="link in links"
        :to="link.url"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </nav>
  <br />
</template>

<style lang="scss" scoped>
nav {
  --logo-size: 5rem;

  color: hsl(180, 70%, 97%);
  border-bottom: 1px solid hsla(180, 70%, 97%, 0.1);

  .nav__inner {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;

    flex-wrap: wrap;
    max-width: 50rem;
    margin: 0 auto;
  }

  .icon {
    display: inline-block;
    vertical-align: middle;
  }

  a {
    margin: 0.4rem;
  }

  a,
  svg,
  .icon,
  a:focus,
  a:visited {
    color: inherit;
  }

  .home,
  .icon {
    display: inline-block;
    height: var(--logo-size);
    width: var(--logo-size);
  }

  .home {
    margin: 0;
    margin-right: 1rem;
  }

  @media (max-width: 450px) {
  }
}
</style>
