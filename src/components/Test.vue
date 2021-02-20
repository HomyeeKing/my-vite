<template>
    <div>sss</div>
</template>
<script setup>
    fetch('/rest/test',{
        method:"POST"
    }).then(res=>console.log(res))

</script>