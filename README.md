# ai-pm-portfolio

Alvin AI 产品经理介绍页。

这是一个静态动态单页 v1，使用 `HTML + CSS + JS` 实现，内容集中在 `script.js` 的数据对象中，后续可以平滑迁移到 React/Vite 组件结构。

## 本地预览

```bash
python -m http.server 4173 --bind 127.0.0.1
```

然后打开 `http://127.0.0.1:4173/`。

## 素材填充

- 头像：放入 `assets/profile.jpg`
- PDF 简历：放入 `assets/resume.pdf`
- 心流番茄钟截图：放入 `assets/focus-timer-01.jpg`、`assets/focus-timer-02.jpg`、`assets/focus-timer-03.jpg`
- 码农树洞演示视频：放入 `assets/coder-treehole-demo.mp4`
- 码农树洞视频封面：可选放入 `assets/coder-treehole-poster.jpg`

素材存在后，页面会自动显示图片 / 视频，并自动启用 PDF 简历下载按钮。
