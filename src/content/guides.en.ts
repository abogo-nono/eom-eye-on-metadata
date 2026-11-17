import type { GuideKey } from "./slugs";
import type { GuideText } from "./guides";

export const GUIDES_EN: Record<GuideKey, GuideText> = {
  "remove-gps": {
    title: "How to Remove GPS Location From a Photo (Any Device)",
    h1: "How to remove the GPS location from a photo",
    description:
      "Photos can store the exact place they were taken. Check and remove the GPS location on Windows, Mac, Linux, iPhone and Android, for one photo or a whole folder.",
    short:
      "A photo's location lives in its EXIF GPS tags (GPSLatitude, GPSLongitude, GPSAltitude). To remove it: on Windows, open Properties › Details › Remove Properties and Personal Information. On a Mac, open the photo in Preview › Tools › Show Inspector › GPS › Remove Location Info. On iPhone, tap Options in the share sheet and turn off Location. On any system, for any number of files, drop them on EOM, choose the “Location only” profile and click Clean.",
    minutes: 5,
    sections: [
      {
        id: "check",
        h2: "First, check whether the photo has a location",
        body: [
          "Phones write the location into a photo whenever the camera app is allowed to use location services, which is the default on many phones. Cameras with built-in GPS or a phone connection do the same.",
          "The quickest check: drop the photo on our [in-browser checker](@check). It reads the file on your device and shows the coordinates if there are any. You can also look in Windows Explorer (Properties › Details, section GPS) or in Preview on a Mac (Tools › Show Inspector › the GPS tab).",
          "The position is usually accurate to a few metres. That's enough to point to a house, not just a street.",
        ],
      },
      {
        id: "computer",
        h2: "Remove the location on your computer",
        body: [
          "**Windows (one photo or a few, JPEG/TIFF):**",
          {
            ol: [
              "Right-click the photo and choose Properties.",
              "Open the Details tab and click **Remove Properties and Personal Information** at the bottom.",
              "Choose “Remove the following properties from this file”, tick the GPS fields (or click Select All), then OK.",
            ],
          },
          "**Mac (one photo at a time):**",
          {
            ol: [
              "Open the photo in Preview.",
              "Choose Tools › Show Inspector, then the GPS tab.",
              "Click **Remove Location Info** and save.",
            ],
          },
          "**Linux, or any system with ExifTool:** `exiftool -gps:all= photo.jpg` deletes the GPS block and keeps a backup named `photo.jpg_original`.",
          {
            note: "A location can also be stored outside the GPS block: in XMP, and as place names (City, Country, Sub-location) in IPTC. Built-in system tools often miss those. EOM's “Location only” profile removes all of them.",
          },
        ],
      },
      {
        id: "folder",
        h2: "Remove it from a whole folder at once",
        body: [
          "The system tools above work file by file. For a holiday folder, a shoot or a phone backup, use EOM:",
          {
            ol: [
              "Download [EOM](@download) (free, no installer) and open it.",
              "Drop the folder on the window. Every photo gets a risk rating.",
              "Choose the **Location only** profile. The preview shows exactly which tags will go.",
              "Tick **Copies in** to keep the originals untouched, then click **Clean**.",
              "Open Before / after on any file to confirm the GPS tags are gone.",
            ],
          },
          "From a terminal, the same thing is one line:",
          {
            code: "eom clean ~/Pictures/holiday -r --profile location --output-dir ~/Pictures/holiday-clean",
          },
        ],
      },
      {
        id: "stop",
        h2: "Stop your phone from adding it",
        body: [
          "**iPhone:** Settings › Privacy & Security › Location Services › Camera › **Never**. New photos won't be geotagged. Photos already taken keep their location.",
          "**Android:** open the Camera app, go to its settings and turn off the location option. It's called “Save location”, “Location tags” or similar, depending on the maker.",
          "Turning it off loses the map view in your gallery. If you like that view, keep location on and remove it only from the copies you share. See [iPhone and Android photos](@phone-photos).",
        ],
      },
      {
        id: "platforms",
        h2: "Don't social networks remove it anyway?",
        body: [
          "Large platforms generally strip EXIF data from the public copy of a photo. That protects you from other users, not from the platform, which receives the original file.",
          "Plenty of channels keep the original file, location included: email attachments, cloud share links, photos sent “as a file” or “as a document” in messaging apps, many forums and marketplaces, and files copied to a USB stick. Clean before you share, and you don't have to know the rules of each one.",
        ],
      },
    ],
    howto: {
      name: "Remove the GPS location from photos with EOM",
      steps: [
        [
          "Open EOM",
          "Download EOM for Windows, macOS or Linux and run it. There is nothing to install.",
        ],
        ["Add the photos", "Drag the photos or the whole folder onto the EOM window."],
        [
          "Choose a profile",
          "Select the “Location only” profile. The preview marks every location tag that will be removed.",
        ],
        [
          "Keep the originals",
          "Tick “Copies in” and choose a folder if you want to keep the original files.",
        ],
        [
          "Clean and verify",
          "Click Clean, then open Before / after to confirm the location is gone.",
        ],
      ],
    },
    faq: [
      [
        "Does a screenshot contain a GPS location?",
        "Usually not. Screenshots don't record GPS. They can still carry the device model, the date and the software that took them.",
      ],
      [
        "Does removing the location reduce photo quality?",
        "No visible change. With ExifTool installed, EOM doesn't touch the image data at all. Without it, JPEGs are saved again with their original quality settings.",
      ],
      [
        "Can I remove the location but keep the date?",
        "Yes. EOM's “Location only” profile removes GPS coordinates and place names and keeps everything else, including dates.",
      ],
      [
        "Is the location also in the file name or the folder?",
        "Not in the photo file itself, but some apps name exported files or albums after a place. Check names before sharing too.",
      ],
    ],
  },

  "phone-photos": {
    title: "Remove Location From iPhone & Android Photos Before Sharing",
    h1: "Remove the location from iPhone and Android photos",
    description:
      "Your phone geotags every photo by default. How to share without location on iPhone and Android, stop recording it, and clean photos you already took.",
    short:
      "On iPhone, tap Share, then Options at the top of the share sheet, and turn off Location before you send. To stop recording it, go to Settings › Privacy & Security › Location Services › Camera and choose Never. On Android, turn off the location option in the camera app's settings. For photos already in your library, remove the location when sharing, or clean them on a computer with EOM.",
    minutes: 4,
    sections: [
      {
        id: "why",
        h2: "Why your phone stores where each photo was taken",
        body: [
          "Gallery apps use it for the map view and “memories”. To build them, the camera writes GPS coordinates into every photo, accurate to a few metres. Those coordinates go wherever the file goes.",
          "Most people never notice, because nothing on the picture shows it. Our [photo checker](@check) shows it in a second.",
        ],
      },
      {
        id: "iphone-share",
        h2: "iPhone: share a photo without its location",
        body: [
          {
            ol: [
              "Select the photo (or several) in Photos and tap **Share**.",
              "At the top of the share sheet, tap **Options**.",
              "Turn off **Location**, then tap Done and share as usual.",
            ],
          },
          "This only affects the copy you send. The photo in your library keeps its location. The Options button also applies when you share by AirDrop, Messages or Mail.",
        ],
      },
      {
        id: "iphone-stop",
        h2: "iPhone: stop geotagging new photos",
        body: [
          "Settings › Privacy & Security › Location Services › Camera › **Never**. From now on, new photos have no location. Existing photos are unchanged.",
          "iPhones save photos as HEIC by default. HEIC files carry the same EXIF data as JPEGs, location included.",
        ],
      },
      {
        id: "android",
        h2: "Android",
        body: [
          "Every maker ships its own camera app, so names differ, but the setting exists on all of them:",
          {
            ul: [
              "Open the **Camera** app and its settings (gear icon).",
              "Turn off **Save location**, **Location tags** or the option with a similar name.",
              "Or remove the camera's location permission in Settings › Apps › Camera › Permissions.",
            ],
          },
          "Some gallery apps can remove the location when you share. Check the share options of yours. When in doubt, check the file you received with the [checker](@check).",
        ],
      },
      {
        id: "library",
        h2: "Photos you already took",
        body: [
          "Copy them to a computer, drop the folder on [EOM](@download) and use the **Location only** or **Social media sharing** profile. Tick “Copies in” to keep the originals with their map data and share the clean copies.",
          "Videos recorded on a phone often carry a location too. See [MP3, MP4 and video files](@audio-video).",
        ],
      },
    ],
    faq: [
      [
        "If I turn off Location in the share Options, is my library photo changed?",
        "No. Only the copy you send is stripped. The photo in your library keeps its location.",
      ],
      [
        "Does AirDrop send the location?",
        "AirDrop sends the original file, location included, unless you turn off Location in the share sheet's Options first.",
      ],
      [
        "Do messaging apps remove the location?",
        "It depends on the app and on how you send. A photo sent “as a file” or “as a document” is usually the original, with its metadata. Clean it first to be sure.",
      ],
    ],
  },

  "what-is-exif": {
    title: "What Is EXIF Data? What It Contains and Who Can Read It",
    h1: "What is EXIF data?",
    description:
      "EXIF is the hidden data cameras and phones store inside every photo: camera, settings, date, often GPS and serial numbers. What it contains, who can read it, how to remove it.",
    short:
      "EXIF (Exchangeable Image File Format) is a standard for storing information inside photo files. Cameras and phones use it to record the camera make and model, the shooting settings (exposure, aperture, ISO, focal length), the date and time, and often the GPS location and the camera's serial number. It's invisible in the image, but anyone who has the file can read it with free tools.",
    minutes: 5,
    sections: [
      {
        id: "contents",
        h2: "What an EXIF block contains",
        body: [
          "A typical phone photo carries dozens of tags. The ones that matter for privacy:",
          {
            table: [
              ["Tag", "Example", "What it gives away"],
              [
                "GPSLatitude / GPSLongitude",
                "48° 51' 30\" N, 2° 17' 40\" E",
                "Where you were, to a few metres",
              ],
              ["DateTimeOriginal", "2024:03:14 08:42:31", "When, to the second"],
              ["Make / Model", "Apple iPhone 15 Pro", "What device you use"],
              ["BodySerialNumber", "DNPXQ2M5…", "Links every photo from the same camera"],
              ["Artist / Copyright", "Jane Doe", "Your name"],
              ["Software", "17.3.1 / Lightroom", "Software and version"],
              ["ThumbnailImage", "160×120 JPEG", "A preview that can survive crops and edits"],
            ],
          },
          "The rest is technical: exposure, aperture, ISO, flash, white balance, orientation. Harmless on its own.",
        ],
      },
      {
        id: "standards",
        h2: "EXIF, XMP and IPTC: three places for the same kind of data",
        body: [
          "**EXIF** dates from 1995 and is written by the camera. **XMP** is a newer format, written mostly by editing software such as Lightroom or Photoshop; it can hold the same fields and an editing history. **IPTC** comes from the press industry and holds captions, keywords, credits and place names.",
          "A clean-up that only touches EXIF can leave your name in XMP or your city in IPTC. EOM reads and removes all three.",
        ],
      },
      {
        id: "who",
        h2: "Who can read it",
        body: [
          "Anyone who has the file. Every operating system shows part of it in the file properties, and free tools show all of it. No password, no special skill.",
          "What matters is whether the file reaches people as the original. Large social networks usually strip EXIF from public copies. Email attachments, cloud links, photos sent as files and many websites don't. See [what photo metadata reveals](@what-metadata-reveals).",
        ],
      },
      {
        id: "see",
        h2: "How to see a photo's EXIF data",
        body: [
          {
            ul: [
              "In your browser, without uploading: our [photo checker](@check).",
              "Windows: right-click › Properties › Details.",
              "Mac: Preview › Tools › Show Inspector › the (i) tab, then EXIF and GPS.",
              "Every tag, on any system: open the photo in [EOM](@download), or run `exiftool photo.jpg`.",
            ],
          },
        ],
      },
      {
        id: "remove",
        h2: "How to remove it",
        body: [
          "Removing EXIF doesn't change the picture. You can remove everything, or only what matters: the location, your name, the serial numbers. EOM's profiles do exactly that, and the guide [remove the GPS location from a photo](@remove-gps) covers the built-in tools of each system.",
        ],
      },
    ],
    faq: [
      [
        "Is EXIF data the same as metadata?",
        "EXIF is one kind of metadata, specific to images. Photos can also carry XMP and IPTC metadata, and other files have their own: ID3 in MP3s, document properties in PDF and Office files.",
      ],
      [
        "Do PNG files have EXIF data?",
        "They can. PNG supports EXIF and text chunks, though many apps write less into PNGs than into JPEGs.",
      ],
      [
        "Does removing EXIF data change the photo?",
        "No. The pixels stay the same. Only the orientation tag can matter: if it's removed, a few viewers may show the photo rotated. EOM's profiles other than “Remove everything” keep technical tags like orientation.",
      ],
    ],
  },

  "what-metadata-reveals": {
    title: "What Photo Metadata Reveals About You (With Real Cases)",
    h1: "What your photo metadata reveals about you",
    description:
      "Location, identity, serial numbers, devices, routines, editing history: what hidden metadata says about you, with a real case, and how EOM rates the risk.",
    short:
      "Photo metadata can reveal where you were (GPS coordinates accurate to a few metres), who you are (author and owner names), which device you use (make, model, serial numbers that link your photos together), when you were there (timestamps to the second) and how the file was edited. EOM classifies every tag into these categories and rates each file High, Medium, Low or Clean.",
    minutes: 6,
    sections: [
      {
        id: "categories",
        h2: "Six things a file can say about you",
        body: [
          "**1. Where you were.** GPS latitude, longitude and altitude, plus place names (city, country). Several photos taken at home give away your address.",
          "**2. Who you are.** Author, artist, owner, copyright holder, the “last modified by” name of a document, the company your software is licensed to.",
          "**3. What links you.** Serial numbers of camera bodies and lenses, unique image and document IDs. They tie photos posted under different accounts to the same person.",
          "**4. What you own.** Make, model, lens, firmware.",
          "**5. When.** Capture time to the second, with time zone. Across many photos, that's a routine.",
          "**6. What happened to the file.** Software, editing history, and in documents, revision authors and total editing time.",
        ],
      },
      {
        id: "case",
        h2: "A real case: found by a photo's GPS data",
        body: [
          "In December 2012, John McAfee was being sought for questioning by police in Belize and was in hiding. Journalists from Vice published a photo of him. The photo still held its GPS coordinates, and readers placed him in Guatemala within hours. The location was meant to be secret. Nobody had checked the file.",
          "It's the classic case because it's so ordinary: one photo, no hacking, just a file that said more than its author meant it to.",
        ],
      },
      {
        id: "everyday",
        h2: "Everyday situations where it matters",
        body: [
          {
            ul: [
              "Selling something online from home: the listing photos can carry your address.",
              "Sending a CV or a report as PDF or Word: author, company and past revisions travel with it.",
              "Posting under a pseudonym: the camera serial number can link the account to your real one.",
              "Sharing children's photos: location and routine.",
              "Journalists and activists: sources, places and devices.",
            ],
          },
        ],
      },
      {
        id: "rating",
        h2: "How EOM rates the risk",
        body: [
          "EOM sorts every tag into a category, and each category has a severity:",
          {
            table: [
              ["Severity", "Categories"],
              ["High", "Location, identity, unique IDs and serial numbers"],
              ["Medium", "Device, dates, software and editing history, embedded thumbnails"],
              ["Low", "Copyright and licence, other tags"],
              ["None", "Technical tags (size, colour, exposure)"],
            ],
          },
          "A file's rating is its most severe category. One GPS tag is enough to make a file High. You can test any photo with the [in-browser checker](@check), which uses the same rules.",
        ],
      },
    ],
    faq: [
      [
        "Can metadata reveal my home address?",
        "Yes. GPS coordinates in photos taken at home point to the building, often to within a few metres.",
      ],
      [
        "Can my photos be linked together even without my name?",
        "Yes. Camera body and lens serial numbers, and some unique image IDs, are the same across every photo from that device.",
      ],
      [
        "Is all metadata dangerous?",
        "No. Technical tags such as exposure, colour profile or orientation reveal nothing personal. That's why EOM can remove what matters and keep the rest.",
      ],
    ],
  },

  pdf: {
    title: "How to Remove Metadata From a PDF (Properly)",
    h1: "How to remove metadata from a PDF, properly",
    description:
      "PDFs store author, software, company and dates in two places, and quick edits can leave old values recoverable. How to really remove PDF metadata.",
    short:
      "A PDF keeps metadata in two places: the document information dictionary (Title, Author, Subject, Keywords, Creator, Producer, dates) and an XMP metadata stream. Many tools edit these as an incremental update appended to the file, which leaves the old values recoverable. To remove PDF metadata properly, the file must be rewritten. EOM always rewrites PDFs; Adobe Acrobat Pro's Remove Hidden Information also works.",
    minutes: 5,
    sections: [
      {
        id: "contents",
        h2: "What a PDF reveals",
        body: [
          {
            ul: [
              "**Author**: usually your account name in Word or your computer's user name.",
              "**Creator and Producer**: the software and version that made the file.",
              "**Creation and modification dates**, with time zone.",
              "**Title, Subject, Keywords**: sometimes an old working title.",
              "**XMP**: a second copy of all of this, plus document IDs and sometimes an editing history.",
            ],
          },
        ],
      },
      {
        id: "trap",
        h2: "The incremental-update trap",
        body: [
          "PDF allows changes to be appended at the end of the file instead of rewriting it. Fast, but the previous version of the metadata stays inside the file, and recovery tools can read it.",
          "ExifTool's own documentation says its PDF edits are reversible for this reason. That's why EOM never uses ExifTool for PDFs: it rewrites the whole file with pypdf, so the old values are gone.",
          {
            note: "Clearing the document properties in a viewer and saving can have the same problem. Check the result with a full metadata reader before you send a sensitive PDF.",
          },
        ],
      },
      {
        id: "how",
        h2: "Three ways to do it",
        body: [
          "**With EOM (free, Windows, Mac, Linux):** drop the PDFs, choose a profile (“Full anonymity” removes everything not needed to display the file), click Clean. Before / after shows what's left.",
          "**With Adobe Acrobat Pro:** use the Redact tools' **Remove Hidden Information** (or Sanitize Document). It also removes hidden layers, comments and attachments.",
          "**At the source:** before exporting from Word, run File › Info › Check for Issues › Inspect Document. See [Word, Excel and PowerPoint](@office).",
          "From a terminal, for a folder:",
          {
            code: "eom clean ~/Documents/to-send -r --profile anonymous --output-dir ~/Documents/clean",
          },
        ],
      },
    ],
    howto: {
      name: "Remove metadata from a PDF with EOM",
      steps: [
        ["Open EOM", "Run EOM on Windows, macOS or Linux."],
        ["Add the PDF", "Drag the PDF files or their folder onto the window."],
        ["Pick a profile", "Choose “Full anonymity” or “Remove everything”."],
        ["Clean", "Click Clean. EOM rewrites each PDF so old values don't stay in the file."],
        ["Verify", "Open Before / after to see that Author, Creator and the XMP data are gone."],
      ],
    },
    faq: [
      [
        "Does “Print to PDF” remove metadata?",
        "It often produces a file with less metadata, but it usually still records the software and dates, sometimes the title. Check the result.",
      ],
      [
        "Does removing metadata change the PDF's content?",
        "No. Pages, text and images stay the same. Only the document properties and the XMP stream are cleared.",
      ],
      [
        "Can I see a PDF's metadata without software?",
        "Most PDF viewers show part of it under Document Properties. To see all of it, including XMP, open it in EOM.",
      ],
    ],
  },

  office: {
    title: "Remove Metadata From Word, Excel & PowerPoint Files",
    h1: "Remove metadata from Word, Excel and PowerPoint files",
    description:
      "Office files store author, company, editing time and the names behind tracked changes. How to remove it with Inspect Document or in one go with EOM.",
    short:
      "Word, Excel and PowerPoint files store the author, “last modified by”, company, manager, template, revision number and total editing time, and Word keeps the name of everyone who left a comment or tracked change. In Office on Windows: File › Info › Check for Issues › Inspect Document, then Remove All. EOM removes these properties from DOCX, XLSX and PPTX files without opening Office, and replaces comment and tracked-change author names with “Author”.",
    minutes: 4,
    sections: [
      {
        id: "contents",
        h2: "What an Office file carries",
        body: [
          {
            ul: [
              "**Author** and **Last modified by**: names from the Office account or the computer.",
              "**Company** and **Manager**: from the licence or the template.",
              "**Total editing time** and **revision number**: how long you worked on it, how many times it was saved.",
              "**Template**: sometimes a path on your computer or a company drive.",
              "**Comments and tracked changes**: each with the name of the person who made it.",
            ],
          },
        ],
      },
      {
        id: "inspect",
        h2: "With Office's Document Inspector (Windows)",
        body: [
          {
            ol: [
              "Save a copy of the file first. Some removals can't be undone.",
              "File › Info › **Check for Issues** › **Inspect Document**.",
              "Tick Document Properties and Personal Information (and Comments, if you want them gone), then Inspect.",
              "Click **Remove All** next to each section you want cleaned.",
            ],
          },
          "In Word for Mac, Review › Protect Document offers an option to remove personal information from the file when it's saved.",
        ],
      },
      {
        id: "eom",
        h2: "With EOM, for many files at once",
        body: [
          "Drop a folder of DOCX, XLSX and PPTX files on [EOM](@download). It reads the core and extended properties and the names behind comments and tracked changes, rates the risk, and removes what the profile says. Office doesn't need to be installed.",
          "Comments and tracked changes themselves are document content. EOM anonymises their author names; to remove the comments, accept or reject the changes in Office.",
        ],
      },
    ],
    faq: [
      [
        "Does saving as PDF remove Office metadata?",
        "Part of it is carried over: the PDF usually gets the title and author. Clean the PDF afterwards; see [remove metadata from a PDF](@pdf).",
      ],
      [
        "Do old .doc and .xls files work?",
        "EOM handles the modern formats (DOCX, XLSX, PPTX). Save older files in the new format first.",
      ],
    ],
  },

  "audio-video": {
    title: "Remove Metadata From MP3, MP4 and Video Files",
    h1: "Remove metadata from MP3, MP4 and video files",
    description:
      "Audio and video files carry tags too: artist, comments, encoder, cover art, and phone videos often a location. How to see and remove them.",
    short:
      "MP3 files store ID3 tags (artist, album, comments, “encoded by”, cover art), and FLAC, OGG and M4A have equivalents. MP4 and MOV videos store creation dates, the recording device and, for phone videos, often the GPS location. EOM reads and removes these tags for MP3, FLAC, OGG, Opus, WAV, AIFF, M4A, WMA, APE, WavPack, MP4, M4V, MOV, MKV and WebM.",
    minutes: 3,
    sections: [
      {
        id: "audio",
        h2: "Audio: more than the song title",
        body: [
          "Tags meant for music players can hold personal data: a name in “Artist” or “Encoded by” on a voice memo, comments, the software used, a cover image taken with your phone.",
          "For a podcast or a voice note sent to a journalist, that's worth checking. Drop the files on EOM and choose a profile.",
        ],
      },
      {
        id: "video",
        h2: "Video: date, device and place",
        body: [
          "Phones record the creation date, the device model and often the location in the video file itself. Social networks re-encode videos, but a file sent directly keeps it all.",
          "EOM cleans MP4, M4V and MOV through ExifTool when it's installed (it's bundled with the Windows version), and through its built-in reader otherwise.",
        ],
      },
      {
        id: "cli",
        h2: "For a music or video library",
        body: [
          "Clean a whole folder into copies:",
          {
            code: "eom clean ~/Music/demos -r --profile anonymous --output-dir ~/Music/demos-clean",
          },
          "See all commands in [command-line metadata cleaning](@command-line).",
        ],
      },
    ],
    faq: [
      [
        "Does removing tags change the sound or picture?",
        "No. Only the tags are removed; the audio and video streams are untouched.",
      ],
      [
        "Will my music player still show the song names?",
        "Not if you remove everything. Choose a profile that keeps what you need, or clean only the copies you share.",
      ],
    ],
  },

  windows: {
    title: "How to Remove Metadata From Files on Windows 10 & 11",
    h1: "How to remove metadata on Windows",
    description:
      "Windows has a built-in way to remove file properties, with limits. How to use it, and how to clean photos, PDFs and Office files in bulk for free.",
    short:
      "On Windows 10 and 11, right-click a file, choose Properties › Details › Remove Properties and Personal Information, then remove all or selected properties. It works on common photo and Office files, one batch at a time, and doesn't handle every format or metadata block. For full control, EOM runs on Windows without installation, includes ExifTool, cleans whole folders and adds a right-click menu.",
    minutes: 4,
    sections: [
      {
        id: "builtin",
        h2: "The built-in way",
        body: [
          {
            ol: [
              "Select one or more files in File Explorer, right-click, **Properties**.",
              "Open the **Details** tab and click **Remove Properties and Personal Information**.",
              "Choose **Create a copy with all possible properties removed**, or pick the properties to remove from the file itself.",
            ],
          },
          "Limits: it only knows the properties Windows understands for that format, it can't show you a risk, and it says nothing about what it couldn't remove. PDFs, audio and many photo blocks (XMP, maker notes) are out of its reach.",
        ],
      },
      {
        id: "eom",
        h2: "With EOM",
        body: [
          {
            ol: [
              "Download `eom-windows-x86_64.zip` from the [download section](@download), unzip, run `eom.exe`. ExifTool is included.",
              "Drop files or folders. Each gets a risk rating.",
              "Pick a profile, tick “Copies in” if you want to keep the originals, click Clean.",
            ],
          },
          "In Settings, you can add EOM to the right-click menu of File Explorer.",
          "In PowerShell, the same binary is a command-line tool:",
          {
            code: "eom.exe clean C:\\Users\\me\\Pictures -r --profile social --output-dir C:\\Users\\me\\clean",
          },
        ],
      },
    ],
    faq: [
      [
        "Does EOM need administrator rights?",
        "No. It's a single executable that runs from any folder.",
      ],
      [
        "Is Windows SmartScreen blocking it?",
        "New unsigned downloads can trigger SmartScreen. Click “More info”, then “Run anyway”. The source code is public on GitHub.",
      ],
    ],
  },

  mac: {
    title: "How to Remove Metadata on a Mac (Photos, PDFs, Files)",
    h1: "How to remove metadata on a Mac",
    description:
      "macOS can remove a photo's location in Preview and Photos, but not much else. How to clean photos, PDFs and Office files on a Mac, one by one or in bulk.",
    short:
      "On a Mac, Preview removes a photo's location (Tools › Show Inspector › GPS › Remove Location Info), and Photos can export without location (untick location information in the export options). macOS has no built-in way to remove other metadata or to clean PDFs and Office files in bulk. EOM runs on Apple Silicon Macs, cleans whole folders and verifies the result.",
    minutes: 4,
    sections: [
      {
        id: "preview",
        h2: "Preview: one photo's location",
        body: [
          {
            ol: [
              "Open the photo in Preview.",
              "Tools › **Show Inspector**, then the GPS tab.",
              "**Remove Location Info**, then save.",
            ],
          },
          "Only the location. The camera, serial numbers, author and dates stay.",
        ],
      },
      {
        id: "photos",
        h2: "Photos: export without location",
        body: [
          "Select the photos, File › Export, and untick the location information option in the export dialog. The exported copies have no location; your library keeps it.",
        ],
      },
      {
        id: "eom",
        h2: "Everything else, in bulk: EOM",
        body: [
          {
            ol: [
              "Download `eom-macos-arm64.zip` from the [download section](@download) and unzip it.",
              "The binary isn't signed. If macOS blocks it, run `xattr -d com.apple.quarantine eom` once in Terminal.",
              "Drop photos, PDFs or Office files, pick a profile, click Clean.",
            ],
          },
          "With Homebrew, `brew install exiftool` gives EOM deeper reading (RAW, maker notes, HEIC).",
        ],
      },
    ],
    faq: [
      [
        "Does EOM run on Intel Macs?",
        "The published build targets Apple Silicon (macOS 14 or later). On an Intel Mac you can run EOM from source with Python.",
      ],
      [
        "Does AirDrop keep metadata?",
        "Yes, AirDrop sends the original file. From Photos, turn off Location in the share sheet's Options first.",
      ],
    ],
  },

  linux: {
    title: "How to Remove Metadata on Linux (GUI and Command Line)",
    h1: "How to remove metadata on Linux",
    description:
      "Remove metadata from photos, PDFs, Office and audio files on Linux: ExifTool and mat2 on the command line, or EOM with a GUI and file-manager integration.",
    short:
      "On Linux, `exiftool -all= file.jpg` removes a photo's metadata and `mat2 file` creates a cleaned copy of many file types. For a graphical tool with a risk rating, cleaning profiles and before/after verification, EOM runs as a single binary on any x86-64 distribution with glibc 2.31 or later, and can add itself to your file manager's right-click menu.",
    minutes: 4,
    sections: [
      {
        id: "cli",
        h2: "Command-line tools",
        body: [
          "**ExifTool** (package `libimage-exiftool-perl` on Debian and Ubuntu):",
          {
            code: "exiftool -all= photo.jpg          # remove everything, keep a backup\nexiftool -gps:all= photo.jpg      # remove only the GPS block\nexiftool -r -all= ~/Pictures/out  # a whole folder",
          },
          "**mat2** (Metadata Anonymisation Toolkit) writes a `.cleaned` copy and supports images, PDFs, Office and audio files:",
          { code: "mat2 report.pdf" },
          "Avoid ExifTool for PDFs you need to anonymise: its PDF edits are incremental and reversible. See [PDF metadata](@pdf).",
        ],
      },
      {
        id: "eom",
        h2: "EOM: a GUI, profiles and verification",
        body: [
          { code: "unzip eom-linux-x86_64.zip && chmod +x eom && ./eom" },
          "Drop files or folders, read the risk of each, choose what to remove, and check before / after. In Settings, add EOM to the right-click menu of your file manager. Install ExifTool for deeper reading; EOM uses it automatically.",
          "EOM is also a CLI, convenient in scripts: see [command-line metadata cleaning](@command-line).",
        ],
      },
    ],
    faq: [
      [
        "Which distributions does EOM run on?",
        "Any x86-64 distribution with glibc 2.31 or later: Ubuntu 20.04+, Debian 11+, Fedora, Arch and so on.",
      ],
      [
        "Is EOM on Flathub or in a package repository?",
        "Not yet. It ships as a single binary on GitHub releases, or runs from source with Python.",
      ],
    ],
  },

  "online-tools": {
    title: "Are Online Metadata Removers Safe? What to Check First",
    h1: "Are online metadata removers safe?",
    description:
      "Uploading a file to remove its private data means giving that data to someone else first. The risks of online metadata removers and what to use instead.",
    short:
      "Most online metadata removers ask you to upload the file to their server, which means sending the very data you want to hide (location, name, document history) to a third party whose storage and retention you can't verify. Tools that run entirely in your browser avoid the upload, and desktop tools like EOM never send anything and also clean whole folders, PDFs and Office files.",
    minutes: 4,
    sections: [
      {
        id: "problem",
        h2: "The paradox of uploading to remove",
        body: [
          "To remove your location from a photo, an upload-based service receives the photo with the location. You then have to trust that it deletes the file, doesn't log it, doesn't keep backups and isn't breached. Nothing on the page can prove any of that.",
          "For a holiday snap, maybe fine. For a contract, a medical document, a source's photo or a picture of your children, it isn't a bet worth making.",
        ],
      },
      {
        id: "checklist",
        h2: "How to tell if a web tool uploads your file",
        body: [
          {
            ol: [
              "Open your browser's developer tools (F12), Network tab.",
              "Drop a file into the tool.",
              "If a request carries a payload the size of your file, it was uploaded.",
            ],
          },
          "Our own [photo checker](@check) passes this test: it reads the file in your browser and sends nothing. It only reads, though. To remove metadata, use a desktop app.",
        ],
      },
      {
        id: "compare",
        h2: "Online tools vs EOM",
        body: [
          {
            table: [
              ["", "Upload-based tools", "EOM"],
              ["File stays on your device", "No", "Yes"],
              ["Works offline", "No", "Yes"],
              ["Whole folders", "Varies", "Yes"],
              ["PDF, Office, audio, video", "Varies", "Yes"],
              ["Shows what's left after cleaning", "Rarely", "Yes"],
              ["Price, account", "Varies", "Free, none"],
            ],
          },
        ],
      },
    ],
    faq: [
      [
        "Do online metadata removers keep my files?",
        "You can't know for sure. Some publish retention policies, but nothing in the browser lets you verify them.",
      ],
      [
        "Are browser-only tools safe?",
        "If they really run locally (check the Network tab), the file doesn't leave your device. Most can only read, or handle a few formats.",
      ],
    ],
  },

  "command-line": {
    title: "Strip Metadata From the Command Line (EOM CLI & CI)",
    h1: "Strip metadata from the command line",
    description:
      "Batch-clean photos, PDFs, Office and audio files from a terminal or a CI pipeline with the EOM CLI: risk checks with exit codes, profiles, dry runs.",
    short:
      "The EOM binary is also a command-line tool: `eom risk PATH -r` prints each file's privacy risk and exits with 0 (clean or low), 1 (medium) or 2 (high); `eom clean PATH -r --profile social --output-dir OUT` writes cleaned copies; `eom extract` exports reports in JSON, CSV, HTML or text; `eom edit` sets fields or shifts dates. It works the same on Windows, macOS and Linux.",
    minutes: 4,
    sections: [
      {
        id: "commands",
        h2: "The commands",
        body: [
          {
            code: 'eom extract photo.jpg --format json         # print metadata (txt, json, csv, html)\neom extract ~/Pictures -r -o report.html    # recursive HTML report\neom risk ~/Pictures -r -v                   # exit code: 0 clean/low, 1 medium, 2 high\neom clean ~/Pictures -r --profile social --output-dir ~/clean\neom clean doc.pdf --categories location,identity --dry-run -v\neom edit photo.jpg --author "Jane" --copyright "CC-BY 4.0" --shift +2h\neom profiles                                # list profiles and categories',
          },
          "Profiles: `all`, `anonymous`, `social`, `keep_copyright`, `location`. Or pass `--categories` with any of: location, identity, identifiers, device, dates, software, thumbnail, copyright, technical, other.",
        ],
      },
      {
        id: "ci",
        h2: "Block leaks in CI",
        body: [
          "`eom risk` exits with 2 when any file is high risk, which fails a CI step. Useful for a website's image folder or a documentation repository:",
          {
            code: "- name: No location or author data in published images\n  run: |\n    curl -sL -o eom.zip https://github.com/abogo-nono/eom/releases/latest/download/eom-linux-x86_64.zip\n    unzip -q eom.zip -d eom && chmod +x eom/eom\n    ./eom/eom risk public/images -r -v",
          },
          "Want to allow medium risk (dates, device)? Treat exit code 1 as success in your script.",
        ],
      },
      {
        id: "dry",
        h2: "Dry runs and copies",
        body: [
          "`--dry-run` shows what would be removed without writing anything. `--output-dir` writes cleaned copies and never overwrites an existing file. Without it, files are cleaned in place.",
        ],
      },
    ],
    faq: [
      [
        "Does the CLI need a display?",
        "No. CLI commands don't open a window. The binary still loads the Qt libraries, so on a minimal container install `libegl1 libgl1 libxkbcommon0 libdbus-1-3` first.",
      ],
      [
        "Can I use ExifTool from EOM's CLI?",
        "Yes, automatically: if ExifTool is installed, EOM uses it to read files and to clean the formats it writes safely.",
      ],
    ],
  },
};
