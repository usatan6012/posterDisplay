import { serveDir } from "https://deno.land/std@0.223.0/http/file_server.ts";

// localhostにDenoのHTTPサーバーを展開
Deno.serve(async request => {
    // パス名を取得する
    // http://localhost:8000/hoge に接続した場合"/hoge"が取得できる
    const pathname = new URL(request.url).pathname;
    console.log(`pathname: ${pathname}`);
  
    // ./public以下のファイルを公開
    return serveDir(
      request,
      {
        /*
        - fsRoot: 公開するフォルダを指定
        - urlRoot: フォルダを展開するURLを指定。今回はlocalhost:8000/に直に展開する
        - enableCors: CORSの設定を付加するか
        */
        fsRoot: "./public/",
        urlRoot: "",
        enableCors: true,
      }
    );
});