function saveCookiesToFile() {
    const cookies = document.cookie;
    const blob = new Blob([cookies], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cookies.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// تشغيل الدالة تلقائيًا عند تحميل الصفحة
window.onload = saveCookiesToFile;
