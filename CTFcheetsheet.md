**# Common Hashes**

    MD5
    SHA-1
    SHA-256
    SHA-512
    SHA-3
    BLAKE2
    RIPEMD-160
    HMAC (Hash-based Message Authentication Code)

**# Weak Hashes**
    MD5
    SHA-1
    CRC32
    HAVAL
    Tiger
    FNV-1 (Fowler–Noll–Vo)
    Snefru

**# Common Ciphers**

    AES (Advanced Encryption Standard)
    DES (Data Encryption Standard)
    3DES (Triple DES)
    RSA (Rivest–Shamir–Adleman)
    EC (Elliptic Curve Cryptography)
    ChaCha20
    Blowfish
    Twofish
    RC4 (Rivest Cipher 4)
    Camellia
    Serpent

**# Weak Ciphers**

    RC4
    DES (Data Encryption Standard)
    3DES (Triple DES)
    MD5 (used as a cipher in certain protocols)
    AES-128 (in some contexts, vulnerable to brute-forcing)
    SSL v2/v3 (Outdated, with RC4 usage)
    WEP (Wired Equivalent Privacy)

# **CTF Challenge Tips and Tools**

## **1. File Formats & Their Secrets:**

### **Excel Files (.xls, .xlsx):**
- **Hint**: Excel files are actually **zip archives**.
- **Action**: Rename `.xls` or `.xlsx` to `.zip`, then unzip to inspect the contents.
  - Inside you might find XML files, macros, or hidden data.

### **Word Files (.docx, .docm):**
- **Hint**: These are also zip archives (like Excel files).
- **Action**: Rename `.docx` or `.docm` to `.zip` and extract it to find embedded content, such as macros, XML files, and other hidden data.

### **PDF Files (.pdf):**
- **Hint**: PDFs can sometimes contain hidden data in embedded forms, objects, or scripts.
- **Action**: Look for embedded JavaScript or use tools like **pdfid.py** to analyze them for hidden features.

### **Zip Files (.zip):**
- **Hint**: Zip files may contain **password-protected** content or encrypted files.
- **Action**: Use **John the Ripper** or **fcrackzip** to crack passwords. Consider brute-force or dictionary attacks.

### **Image Files (.jpg, .png, .gif):**
- **Hint**: Images can hide data through **steganography**.
- **Action**: Check for hidden data using **zsteg** (for PNG), **stegsolve**, or **binwalk** for potential steganographic data.

---

## **2. Web Challenges & Files to Check:**

### **robots.txt:**
- **Hint**: The **robots.txt** file can contain hints or even URLs to hidden parts of the website.
- **Action**: Always check `http://<target_website>/robots.txt` for any disallowed paths or other useful information.

### **Hidden Directories/Files:**
- **Hint**: Websites often hide **directories** that are not linked on the page.
- **Action**: Use **dirbuster** or **gobuster** to brute-force potential directories and find hidden paths.

### **Source Code:**
- **Hint**: Always **view the page source** or **inspect elements** for hidden comments, JavaScript, or URL parameters.
- **Action**: Look for clues in **JavaScript files** or **hidden form fields**. Sometimes flags or hints are hidden within source code comments.

---

## **3. Passwords & Hashes:**

### **Hash Functions:**
- **Hint**: Many challenges involve cracking or comparing hash values (MD5, SHA-1, SHA-256, etc.).
- **Action**: Use **hashcat** or **John the Ripper** to crack simple hashes.
  - **Common Weak Hashes**: MD5, SHA-1, and CRC32 are **weak** and can be brute-forced quickly with online tools or wordlists.

### **Password Protecting Files:**
- **Hint**: Files can often be **password protected** (e.g., zip, pdf, etc.).
- **Action**: Use **John the Ripper**, **fcrackzip**, or **pdfcrack** to attempt password cracking.

---

## **4. Useful Tools to Keep in Mind:**

### **binwalk:**
- **Hint**: Use for extracting and analyzing embedded files in firmware images or binary files.
- **Action**: Run `binwalk <filename>` to look for embedded files or hidden data.

### **strings:**
- **Hint**: Extract readable text from binary files.
- **Action**: Run `strings <filename>` to look for hidden strings in binaries.

### **ffuf (Fuzz Faster U Fool):**
- **Hint**: It helps with brute-forcing directories and files on a web server.
- **Action**: Use it to discover hidden resources like `/admin`, `/backup`, etc.

### **curl:**
- **Hint**: Use **curl** to interact with web services or test HTTP requests.
- **Action**: Use `curl -v <URL>` to inspect headers or `curl -X POST -d "data=value" <URL>` for testing endpoints.

---

## **5. Miscellaneous Tips:**

### **Always Check for Hidden Files:**
- Files starting with a **dot** (e.g., `.hiddenfile`) are typically hidden in Unix-like systems. 
- **Action**: Use `ls -la` or `find . -name '.*'` to uncover them.

### **Check for Metadata:**
- **Hint**: Files like images or documents may contain hidden **metadata** that can provide clues.
- **Action**: Use tools like **exiftool** to view metadata of images, PDFs, and documents.

### **Use Online Hash Cracking:**
- If you're stuck on cracking hashes, check services like **CrackStation**, **HashKiller**, or **OnlineHashCrack** for fast hash lookups.

---

## **6. General Strategies for CTF Challenges:**

### **Don't Hesitate to Google:**
- It’s not cheating! If you see a name, term, or acronym that you don't recognize, quickly look it up. Many CTF challenges use **well-known vulnerabilities**.

### **Break Down the Problem:**
- Focus on the basics first: Are there hidden files? Are there password-protected files? What tools should I use to extract data? Sometimes stepping back and taking a deep breath is the best strategy.

### **Collaborate:**
- If you're in a team, don’t hesitate to **split tasks** based on expertise. One person can focus on enumeration, while another cracks hashes.

### **Documentation:**
- Always document your findings during a CTF! This way, you’ll avoid going in circles when trying to find the next flag. It also makes it easier to reference tools and techniques that worked.

