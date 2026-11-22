import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();
const PORT = 3001;
const dataFile = new URL('./forms.json', import.meta.url);
app.use(express.json());
async function readForms() {
const text = await readFile(dataFile, 'utf8');
return JSON.parse(text);
}
async function saveForms(forms) {
await writeFile(dataFile, JSON.stringify(forms, null, 2));
}
// READ: return all forms
app.get('/api/forms', async (req, res) => {
try {
res.json(await readForms());
} catch (error) {
res.status(500).json({ error: 'Could not read forms' });
}
});
// UPDATE: replace one form
app.put('/api/forms/:formId', async (req, res) => {
const updated = req.body;
if (updated?.formId !== req.params.formId || !Array.isArray(updated?.fields)) {
return res.status(400).json({ error: 'Form must have a matching formId and a fields list' });
}
try {
const forms = await readForms();
const index = forms.findIndex(form => form.formId === req.params.formId);
if (index === -1) {
return res.status(404).json({ error: 'Form not found' });
}
forms[index] = updated;
await saveForms(forms);
res.json(updated);
} catch (error) {
res.status(500).json({ error: 'Could not update form' });
}
});
app.listen(PORT, () => {
console.log(`API running at http://localhost:${PORT}`);
});
