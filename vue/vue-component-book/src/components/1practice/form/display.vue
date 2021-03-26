<template>
    <div ref="display"></div>
</template>

<script>
export default {
    props: {
        code: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            html: '',
            js: '',
            css: ''
        }
    },
    methods: {
        getSource(source, type){
            const regex = new RegExp(`<${type}[^>]*>`);
            let openingTag = source.match(regex);
            if(!openingTag) return '';
            else openingTag = openingTag[0];        //<template> 、 <script> 、<style>
            return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`));
        }
    }
}
</script>

<style>

</style>