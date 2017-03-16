(function () {
    jQuery(document).ready(function () {

        //获取dom元素
        this._dom = {
            selectFile: $(".selectFile"),
            uploadFile: $(".uploadFile")
        };

        //初始化变量
        this.fileData = {};

        //绑定事件：
        this._dom.selectFile.on("change",function(){
            var fileLists = this.files;
            clipFile(fileLists);
        });

        //文件上传
        this._dom.uploadFile.on("click", function(){
            uploadFile();
        });

        // 文件分片处理：
        function clipFile(fileLists){
            // for(var i = 0; i<fileLists.length; i++){
            //
            // }
            var fileInfo = fileLists[0];
            var fileSize = fileInfo.size;
            var fileName = fileInfo.name;

            //进行分片,2M为一片
            var chips = fileSize/2097152;



        }

         function uploadFile() {

         }
    })
})();