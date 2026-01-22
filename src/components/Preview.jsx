import { useState } from 'react'

function Preview({ report }) {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(report)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = report
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
    }
  }

  return (
    <div className="preview-section">
      <div className="preview-header">
        <h2>SOAP Report Preview</h2>
        <button type="button" className="btn btn-copy" onClick={handleCopy}>
          Copy to Clipboard
        </button>
      </div>
      <textarea
        id="reportPreview"
        readOnly
        value={report}
        placeholder="Fill out the form to see your SOAP report preview here..."
      />
      {showSuccess && (
        <div className="copy-success">✓ Copied to clipboard!</div>
      )}
    </div>
  )
}

export default Preview
