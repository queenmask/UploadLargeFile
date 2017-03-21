(function () {
    jQuery(document).ready(function () {

        //获取dom元素
        this._dom = {
            selectFile: $(".selectFile"),
            uploadFile: $(".uploadFile")
        };

        //初始化变量
        this.fileData = {};

        //文件上传
        this._dom.uploadFile.on("click", function(){
            uploadFile();
        });

        // 文件分片处理：
        function uploadFile() {
            var fileLists = this._dom.selectFile.files;
            var fileInfo = fileLists[0];
            var fileSize = fileInfo.size;
            var fileName = fileInfo.name;

            //进行分片,2M为一片
            var clipSize = 2 * 1024 * 1024;
            var chips = Math.ceil(fileSize / clipSize);
            for (var i = 0; i < chips; i++) {
                // 计算每一片的起始位置
                var startIndex = i*clipSize;
                var endIndex = Math.min(fileSize, startIndex+clipSize);

                //构造一个表单，FormData是HTML5新增的
                var form = new FormData();
                form.append("data", fileInfo.slice(start,end));  //slice方法用于切出文件的一部分
                form.append("name", fileName);
                form.append("total", chips);  //总片数
                form.append("index", i + 1);        //当前是第几片

                //Ajax提交
                $.ajax({
                    url: "d:/File/Upload",
                    type: "POST",
                    data: form,
                    async: true,        //异步
                    processData: false,  //很重要，告诉jquery不要对form进行处理
                    contentType: false,  //很重要，指定为false才能形成正确的Content-Type
                    success: function(){
                        ++succeed;
                        $("#output").text(succeed + " / " + shardCount);
                    }
                });
            }
        }
    })
})();