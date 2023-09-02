# asiayotest

撰寫api供轉換幣別及幣值

# 安裝與執行步驟

1. 打開終端機(Terminal)，Clone 此專案至本地電腦

```
git clone https://github.com/Jin0704/asiayotest.git
```

2. 開啟終端機，進入專案資料夾

```
cd aisayotest
```

3. 安裝 npm 套件

```
npm install
```

3. 安裝 pm2 套件

```
npm install pm2 -g
```

4. 執行 server

```
pm2 start ecosystem.config.js
```

5. 開啟任一瀏覽器瀏覽器，輸入網址即可得到轉換結果

```
http://localhost:3000/api/format?source=USD&target=JPY&amount=$1,525
```

6. 使用完成後，關閉server

```
pm2 delete all
```

7. 單元測試(使用jest)

```
npm run test
```