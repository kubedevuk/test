<script lang="ts" setup>
const config = useRuntimeConfig();

const links: any[] = [];
</script>

<template>
  <footer>
    <div class="block">
      <div class="block__heading">
        <NuxtLink
          class="no-link-line"
          target="_blank"
          to="https://www.kubedev.co.uk"
        >
          <div class="pill">
            Built by <strong>Kubedev</strong> with
            <svg
              class="icon"
              viewBox="0 0 907 828"
              style="
                fill: currentColor;
                fill-rule: evenodd;
                clip-rule: evenodd;
                stroke-linejoin: round;
                stroke-miterlimit: 2;
              "
            >
              <path
                d="M730.084,312.85c4.226,113.133 -40.828,236.381 -79.883,320.702c-29.137,63.033 -92.165,103.467 -161.607,103.675c-58.148,0.184 -129.832,0.398 -188.066,0.573c-68.886,0.206 -131.752,-39.215 -161.569,-101.314c-43.597,-90.793 -96.522,-224.663 -88.059,-325.713"
              />
              <path
                d="M710,410.13l137.329,0c0,0 27.947,188.444 -226.001,233.406"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>

      <div class="block__content">
        <small
          v-if="config?.public?.clientVersion"
          :title="`version: ${config.public.clientVersion}`"
        >
          {{ `v: ${config.public.clientVersion}` }}
        </small>
      </div>
    </div>

    <div class="block">
      <template v-if="links.length">
        <div class="block__heading">
          <strong>More</strong>
        </div>
        <div class="block__content">
          <div v-for="link in links">
            <NuxtLink
              target="_blank"
              :to="link.url"
            >
              {{ link.name }}
              <IconsShare />
            </NuxtLink>
          </div>
        </div>
      </template>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  .icon {
    display: inline-block;
    height: 1.35rem;
    vertical-align: middle;
    width: 1.35rem;
  }

  color: hsl(180, 70%, 97%);

  border-top: 1px solid hsla(180, 70%, 97%, 0.33);
  padding-top: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 50rem;
  margin: 0 auto;

  .block {
    margin: 0 0.75rem;
    text-align: left;

    &__heading {
      margin-bottom: 0.5rem;
    }

    &__content {
      margin-left: 1.5rem;
      margin-bottom: 1rem;

      a {
        margin-bottom: 0.2rem;
        display: block;
        text-wrap: nowrap;
      }

      .icon {
        max-width: 1rem;
      }
    }
  }

  .link {
    text-underline-offset: 0.3rem;

    .icon {
      max-width: 0.9rem;
    }
  }

  .no-link-line {
    text-decoration: none;
  }

  .pill {
    color: hsl(180deg, 70%, 97%);
    background-color: hsl(180deg, 0%, 5%);
    padding: 0.1rem 0.4rem;
    border-radius: 0.4rem;
    text-wrap: nowrap;

    .icon {
      position: relative;
      top: -0.15rem;
      vertical-align: middle;
    }
  }

  a,
  svg,
  .icon,
  a:focus,
  a:visited {
    color: inherit;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;

    .block {
      margin-bottom: 1rem;

      &__content {
        margin-left: 1rem;
      }
    }

    small,
    .no-link {
      display: inline !important;
    }
  }
}
</style>
