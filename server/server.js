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
// All of these functions are copied from the task-manager-2 read update and delete
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
// CREATE: add one form
app.post('/api/forms', async (req, res) => {
const created = req.body;
if (!created?.formId || !Array.isArray(created?.fields)) {
return res.status(400).json({ error: 'Form must have a formId and a fields list' });
}
try {
const forms = await readForms();
if (forms.some(form => form.formId === created.formId)) {
return res.status(409).json({ error: 'A form with that formId already exists' });
}
forms.push(created);
await saveForms(forms);
res.status(201).json(created);
} catch (error) {
res.status(500).json({ error: 'Could not create form' });
}
});
// DELETE: remove one form
app.delete('/api/forms/:formId', async (req, res) => {
try {
const forms = await readForms();
const remaining = forms.filter(form => form.formId !== req.params.formId);
if (remaining.length === forms.length) {
return res.status(404).json({ error: 'Form not found' });
}
await saveForms(remaining);
res.status(204).end();
} catch (error) {
res.status(500).json({ error: 'Could not delete form' });
}
});
app.listen(PORT, () => {
console.log(`API running at http://localhost:${PORT}`);
});
