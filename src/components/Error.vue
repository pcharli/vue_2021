<template>
    <div class="error">
        {{ error }}
    </div>
</template>

<script>
export default {
    name:"error",
    props: {
        error: String
    }
}
</script>