import fs from "node:fs/promises";
import path from "node:path";

const {
  FileBlob,
  PresentationFile,
} = await import(
  "file:///C:/Users/Jake_/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs"
);

const root = process.cwd();
const sourceTemplate = path.join(root, "presentation/sources/presentation-midswedenuniversity-2025_.pptx");
const outputDeck = path.join(root, "presentation/deck/yacoub-thesis-presentation.pptx");
const previewPath = path.join(
  root,
  "outputs/manual-20260609-slide01/presentations/slide-01-title/preview/slide-01.png",
);
const layoutPath = path.join(
  root,
  "outputs/manual-20260609-slide01/presentations/slide-01-title/layout/slide-01.layout.json",
);

const title =
  "Design and Evaluation of an n8n-Based Workflow-to-Action Architecture\n" +
  "for IoT-Style Fan Control";
const subtitle = "PC-hosted n8n, Python middleware, and Raspberry Pi middleware validation";
const presenter = "Yacoub Dawli\nDT099G Bachelor Thesis\nMid Sweden University";
const speakerNotes = [
  "Hi, my name is Yacoub Dawli, and this is my bachelor thesis in DT099G.",
  "",
  "My thesis is about building and evaluating a small IoT-style workflow system. The example I use is a fan that turns on or off depending on temperature.",
  "",
  "But the important part is not the fan itself. The important part is the structure around it: how a workflow makes a decision, how that decision becomes an action, and how the result can be tested and measured.",
].join("\n");

function styleText(shape, options) {
  shape.text.fontSize = options.fontSize;
  shape.text.typeface = "Arial";
  shape.text.color = options.color;
  shape.text.bold = Boolean(options.bold);
  shape.text.alignment = "left";
  shape.text.verticalAlignment = "top";
}

const presentation = await PresentationFile.importPptx(await FileBlob.load(sourceTemplate));

while (presentation.slides.count > 1) {
  presentation.slides.remove(1);
}

const slide = presentation.slides.getItem(0);

for (const image of [...slide.images.items]) {
  image.delete();
}

const titleShape = slide.shapes.getItem(0);
titleShape.position = { left: 72, top: 152, width: 1136, height: 150 };
titleShape.text = title;
styleText(titleShape, { fontSize: 31, color: "#0065BD", bold: true });

const subtitleShape = slide.shapes.getItem(1);
subtitleShape.position = { left: 76, top: 344, width: 1080, height: 52 };
subtitleShape.text = subtitle;
styleText(subtitleShape, { fontSize: 21, color: "#111111", bold: false });

const footerShape = slide.shapes.add({
  geometry: "rect",
  name: "slide-01-footer-info",
  position: { left: 77, top: 586, width: 560, height: 82 },
  fill: "#00000000",
  line: { style: "solid", fill: "#00000000", width: 0 },
});
footerShape.text = presenter;
styleText(footerShape, { fontSize: 18, color: "#111111", bold: false });

slide.speakerNotes.clear();
slide.speakerNotes.setText(speakerNotes);

await fs.mkdir(path.dirname(outputDeck), { recursive: true });
const deckBlob = await PresentationFile.exportPptx(presentation);
await deckBlob.save(outputDeck);

await fs.mkdir(path.dirname(previewPath), { recursive: true });
const previewBlob = await presentation.export({ slide, format: "png", scale: 1 });
await fs.writeFile(previewPath, Buffer.from(await previewBlob.arrayBuffer()));

await fs.mkdir(path.dirname(layoutPath), { recursive: true });
const layoutBlob = await presentation.export({ slide, format: "layout" });
await fs.writeFile(layoutPath, await layoutBlob.text(), "utf8");

console.log(
  JSON.stringify(
    {
      outputDeck,
      previewPath,
      layoutPath,
      slideCount: presentation.slides.count,
    },
    null,
    2,
  ),
);
