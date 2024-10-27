const data = {
    cities: [
        {
            city: "Mumbai",
            events: [
                {
                    id: 1,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 2,
                    name: "HAAZRI - A.R.Rahman",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-shygmdtapg-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2025-17-01",
                    price: "INR 3000",
                    category: "Music",
                    location: "Jio World Garden, BKC: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/haazri-a-r-rahman-live-in-concert/ET00414575'
                },
                {
                    id: 3,
                    name: "One Night feat. Anuv Jain",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407725-zuchqvalcz-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-20-12",
                    price: "INR 2000",
                    category: "Music",
                    location: "Nesco Center: Mumbai",
                    additionalDetails: {
                        time: "5:30 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/one-night-festival-ft-anuv-jain/ET00407725'
                },
                {
                    id: 4,
                    name: "Jigra",
                    description: "Jigra is the heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn`t set the world on fire to protect what`s theirs?",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 250",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/mumbai/movies/jigra/ET00370844'
                },
                {
                    id: 5,
                    name: "Bhool Bhuliyaa 3",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTUxLjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-upyfabkgaw-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 200",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 6,
                    name: "Kunal Kamra Live",
                    description: "Kunal Kamra performing live in your city!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410022-sgpmzakkyh-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-kunal-kamra-live-0-2024-8-30-t-10-51-53.jpg",
                    date: "2024-11-05",
                    price: "INR 950",
                    category: "Comedy",
                    location: "Auditorium: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/kunal-kamra-live/ET00410022'
                },
                {
                    id: 7,
                    name: "Smooth Kullu Smooth",
                    description: "Meet Aaditya Kulshreshth, aka Kullu—the man who turns everyday small-town life into laugh-out-loud moments! With his signature style that oozes nostalgia, Kullu takes you back to those relatable middle-class moments we`ve all lived through",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363579-mjunjfkfhw-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smooth-kullu-smooth-by-aaditya-kulshreshtha-0-2024-10-3-t-13-25-54.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Comedy",
                    location: "Rang Mandir: Bandra",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/smooth-kullu-smooth-by-aaditya-kulshreshtha/ET00363579'
                },
                {
                    id: 8,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 9,
                    name: "My Name Is JAAN",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    date: "2024-11-05",
                    price: "INR 249",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'
                },
                {
                    id: 10,
                    name: "Prithivi Theatre Festival 2024",
                    description: "39th Prithvi Theatre Festival. The spotlight returns to Mumbai’s cherished Prithvi Festival!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00415930-ghepnbqxmg-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prithvi-theatre-festival-2024-0-2024-10-14-t-5-39-5.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/prithvi-theatre-festival-2024/ET00415930'
                },


            ]
        },
        {
            city: "Bangalore",
            events: [
                {
                    id: 11,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 12,
                    name: "HAAZRI - A.R.Rahman",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-shygmdtapg-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2025-17-01",
                    price: "INR 3000",
                    category: "Music",
                    location: "Jio World Garden, BKC: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/haazri-a-r-rahman-live-in-concert/ET00414575'
                },
                {
                    id: 13,
                    name: "One Night feat. Anuv Jain",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407725-zuchqvalcz-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-20-12",
                    price: "INR 2000",
                    category: "Music",
                    location: "Nesco Center: Mumbai",
                    additionalDetails: {
                        time: "5:30 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/one-night-festival-ft-anuv-jain/ET00407725'
                },
                {
                    id: 14,
                    name: "Jigra",
                    description: "Jigra is the heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn`t set the world on fire to protect what`s theirs?",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 250",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/mumbai/movies/jigra/ET00370844'
                },
                {
                    id: 15,
                    name: "Bhool Bhuliyaa 3",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTUxLjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-upyfabkgaw-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 200",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 16,
                    name: "Kunal Kamra Live",
                    description: "Kunal Kamra performing live in your city!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410022-sgpmzakkyh-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-kunal-kamra-live-0-2024-8-30-t-10-51-53.jpg",
                    date: "2024-11-05",
                    price: "INR 950",
                    category: "Comedy",
                    location: "Auditorium: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/kunal-kamra-live/ET00410022'
                },
                {
                    id: 17,
                    name: "Smooth Kullu Smooth",
                    description: "Meet Aaditya Kulshreshth, aka Kullu—the man who turns everyday small-town life into laugh-out-loud moments! With his signature style that oozes nostalgia, Kullu takes you back to those relatable middle-class moments we`ve all lived through",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363579-mjunjfkfhw-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smooth-kullu-smooth-by-aaditya-kulshreshtha-0-2024-10-3-t-13-25-54.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Comedy",
                    location: "Rang Mandir: Bandra",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/smooth-kullu-smooth-by-aaditya-kulshreshtha/ET00363579'
                },
                {
                    id: 18,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 19,
                    name: "My Name Is JAAN",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    date: "2024-11-05",
                    price: "INR 249",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'
                },
                {
                    id: 20,
                    name: "Prithivi Theatre Festival 2024",
                    description: "39th Prithvi Theatre Festival. The spotlight returns to Mumbai’s cherished Prithvi Festival!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00415930-ghepnbqxmg-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prithvi-theatre-festival-2024-0-2024-10-14-t-5-39-5.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/prithvi-theatre-festival-2024/ET00415930'
                },


            ]
        },
        {
            city: "Delhi",
            events: [
                {
                    id: 21,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 22,
                    name: "HAAZRI - A.R.Rahman",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-shygmdtapg-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2025-17-01",
                    price: "INR 3000",
                    category: "Music",
                    location: "Jio World Garden, BKC: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/haazri-a-r-rahman-live-in-concert/ET00414575'
                },
                {
                    id: 23,
                    name: "One Night feat. Anuv Jain",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407725-zuchqvalcz-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-20-12",
                    price: "INR 2000",
                    category: "Music",
                    location: "Nesco Center: Mumbai",
                    additionalDetails: {
                        time: "5:30 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/one-night-festival-ft-anuv-jain/ET00407725'
                },
                {
                    id: 24,
                    name: "Jigra",
                    description: "Jigra is the heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn`t set the world on fire to protect what`s theirs?",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 250",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/mumbai/movies/jigra/ET00370844'
                },
                {
                    id: 25,
                    name: "Bhool Bhuliyaa 3",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTUxLjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-upyfabkgaw-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 200",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 26,
                    name: "Kunal Kamra Live",
                    description: "Kunal Kamra performing live in your city!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410022-sgpmzakkyh-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-kunal-kamra-live-0-2024-8-30-t-10-51-53.jpg",
                    date: "2024-11-05",
                    price: "INR 950",
                    category: "Comedy",
                    location: "Auditorium: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/kunal-kamra-live/ET00410022'
                },
                {
                    id: 27,
                    name: "Smooth Kullu Smooth",
                    description: "Meet Aaditya Kulshreshth, aka Kullu—the man who turns everyday small-town life into laugh-out-loud moments! With his signature style that oozes nostalgia, Kullu takes you back to those relatable middle-class moments we`ve all lived through",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363579-mjunjfkfhw-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smooth-kullu-smooth-by-aaditya-kulshreshtha-0-2024-10-3-t-13-25-54.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Comedy",
                    location: "Rang Mandir: Bandra",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/smooth-kullu-smooth-by-aaditya-kulshreshtha/ET00363579'
                },
                {
                    id: 28,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 29,
                    name: "My Name Is JAAN",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    date: "2024-11-05",
                    price: "INR 249",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'
                },
                {
                    id: 30,
                    name: "Prithivi Theatre Festival 2024",
                    description: "39th Prithvi Theatre Festival. The spotlight returns to Mumbai’s cherished Prithvi Festival!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00415930-ghepnbqxmg-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prithvi-theatre-festival-2024-0-2024-10-14-t-5-39-5.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/prithvi-theatre-festival-2024/ET00415930'
                },


            ]
        },
        {
            city: "Gurugram",
            events: [
                {
                    id: 31,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 32,
                    name: "HAAZRI - A.R.Rahman",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-shygmdtapg-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2025-17-01",
                    price: "INR 3000",
                    category: "Music",
                    location: "Jio World Garden, BKC: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/haazri-a-r-rahman-live-in-concert/ET00414575'
                },
                {
                    id: 33,
                    name: "One Night feat. Anuv Jain",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407725-zuchqvalcz-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-20-12",
                    price: "INR 2000",
                    category: "Music",
                    location: "Nesco Center: Mumbai",
                    additionalDetails: {
                        time: "5:30 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/one-night-festival-ft-anuv-jain/ET00407725'
                },
                {
                    id: 34,
                    name: "Jigra",
                    description: "Jigra is the heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn`t set the world on fire to protect what`s theirs?",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 250",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/mumbai/movies/jigra/ET00370844'
                },
                {
                    id: 35,
                    name: "Bhool Bhuliyaa 3",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTUxLjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-upyfabkgaw-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 200",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 36,
                    name: "Kunal Kamra Live",
                    description: "Kunal Kamra performing live in your city!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410022-sgpmzakkyh-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-kunal-kamra-live-0-2024-8-30-t-10-51-53.jpg",
                    date: "2024-11-05",
                    price: "INR 950",
                    category: "Comedy",
                    location: "Auditorium: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/kunal-kamra-live/ET00410022'
                },
                {
                    id: 37,
                    name: "Smooth Kullu Smooth",
                    description: "Meet Aaditya Kulshreshth, aka Kullu—the man who turns everyday small-town life into laugh-out-loud moments! With his signature style that oozes nostalgia, Kullu takes you back to those relatable middle-class moments we`ve all lived through",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363579-mjunjfkfhw-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smooth-kullu-smooth-by-aaditya-kulshreshtha-0-2024-10-3-t-13-25-54.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Comedy",
                    location: "Rang Mandir: Bandra",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/smooth-kullu-smooth-by-aaditya-kulshreshtha/ET00363579'
                },
                {
                    id: 38,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 39,
                    name: "My Name Is JAAN",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    date: "2024-11-05",
                    price: "INR 249",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'
                },
                {
                    id: 40,
                    name: "Prithivi Theatre Festival 2024",
                    description: "39th Prithvi Theatre Festival. The spotlight returns to Mumbai’s cherished Prithvi Festival!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00415930-ghepnbqxmg-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prithvi-theatre-festival-2024-0-2024-10-14-t-5-39-5.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/prithvi-theatre-festival-2024/ET00415930'
                },


            ]
        },
        {
            city: "Noida",
            events: [
                {
                    id: 41,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 42,
                    name: "HAAZRI - A.R.Rahman",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-shygmdtapg-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2025-17-01",
                    price: "INR 3000",
                    category: "Music",
                    location: "Jio World Garden, BKC: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/haazri-a-r-rahman-live-in-concert/ET00414575'
                },
                {
                    id: 43,
                    name: "One Night feat. Anuv Jain",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407725-zuchqvalcz-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-20-12",
                    price: "INR 2000",
                    category: "Music",
                    location: "Nesco Center: Mumbai",
                    additionalDetails: {
                        time: "5:30 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/one-night-festival-ft-anuv-jain/ET00407725'
                },
                {
                    id: 44,
                    name: "Jigra",
                    description: "Jigra is the heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn`t set the world on fire to protect what`s theirs?",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 250",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/mumbai/movies/jigra/ET00370844'
                },
                {
                    id: 45,
                    name: "Bhool Bhuliyaa 3",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTUxLjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-upyfabkgaw-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 200",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 46,
                    name: "Kunal Kamra Live",
                    description: "Kunal Kamra performing live in your city!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410022-sgpmzakkyh-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-kunal-kamra-live-0-2024-8-30-t-10-51-53.jpg",
                    date: "2024-11-05",
                    price: "INR 950",
                    category: "Comedy",
                    location: "Auditorium: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/kunal-kamra-live/ET00410022'
                },
                {
                    id: 47,
                    name: "Smooth Kullu Smooth",
                    description: "Meet Aaditya Kulshreshth, aka Kullu—the man who turns everyday small-town life into laugh-out-loud moments! With his signature style that oozes nostalgia, Kullu takes you back to those relatable middle-class moments we`ve all lived through",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363579-mjunjfkfhw-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smooth-kullu-smooth-by-aaditya-kulshreshtha-0-2024-10-3-t-13-25-54.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Comedy",
                    location: "Rang Mandir: Bandra",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/smooth-kullu-smooth-by-aaditya-kulshreshtha/ET00363579'
                },
                {
                    id: 48,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 49,
                    name: "My Name Is JAAN",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    date: "2024-11-05",
                    price: "INR 249",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'
                },
                {
                    id: 50,
                    name: "Prithivi Theatre Festival 2024",
                    description: "39th Prithvi Theatre Festival. The spotlight returns to Mumbai’s cherished Prithvi Festival!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00415930-ghepnbqxmg-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prithvi-theatre-festival-2024-0-2024-10-14-t-5-39-5.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/prithvi-theatre-festival-2024/ET00415930'
                },


            ]
        },
        {
            city: "Hyderabad",
            events: [
                {
                    id: 51,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 52,
                    name: "HAAZRI - A.R.Rahman",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-shygmdtapg-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2025-17-01",
                    price: "INR 3000",
                    category: "Music",
                    location: "Jio World Garden, BKC: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/haazri-a-r-rahman-live-in-concert/ET00414575'
                },
                {
                    id: 53,
                    name: "One Night feat. Anuv Jain",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407725-zuchqvalcz-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-20-12",
                    price: "INR 2000",
                    category: "Music",
                    location: "Nesco Center: Mumbai",
                    additionalDetails: {
                        time: "5:30 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/one-night-festival-ft-anuv-jain/ET00407725'
                },
                {
                    id: 54,
                    name: "Jigra",
                    description: "Jigra is the heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn`t set the world on fire to protect what`s theirs?",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 250",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/mumbai/movies/jigra/ET00370844'
                },
                {
                    id: 55,
                    name: "Bhool Bhuliyaa 3",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTUxLjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-upyfabkgaw-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 200",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 56,
                    name: "Kunal Kamra Live",
                    description: "Kunal Kamra performing live in your city!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410022-sgpmzakkyh-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-kunal-kamra-live-0-2024-8-30-t-10-51-53.jpg",
                    date: "2024-11-05",
                    price: "INR 950",
                    category: "Comedy",
                    location: "Auditorium: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/kunal-kamra-live/ET00410022'
                },
                {
                    id: 57,
                    name: "Smooth Kullu Smooth",
                    description: "Meet Aaditya Kulshreshth, aka Kullu—the man who turns everyday small-town life into laugh-out-loud moments! With his signature style that oozes nostalgia, Kullu takes you back to those relatable middle-class moments we`ve all lived through",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363579-mjunjfkfhw-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smooth-kullu-smooth-by-aaditya-kulshreshtha-0-2024-10-3-t-13-25-54.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Comedy",
                    location: "Rang Mandir: Bandra",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/smooth-kullu-smooth-by-aaditya-kulshreshtha/ET00363579'
                },
                {
                    id: 58,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 59,
                    name: "My Name Is JAAN",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    date: "2024-11-05",
                    price: "INR 249",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'
                },
                {
                    id: 60,
                    name: "Prithivi Theatre Festival 2024",
                    description: "39th Prithvi Theatre Festival. The spotlight returns to Mumbai’s cherished Prithvi Festival!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00415930-ghepnbqxmg-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prithvi-theatre-festival-2024-0-2024-10-14-t-5-39-5.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/prithvi-theatre-festival-2024/ET00415930'
                },


            ]
        },
        {
            city: "Pune",
            events: [
                {
                    id: 61,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 62,
                    name: "HAAZRI - A.R.Rahman",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-shygmdtapg-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2025-17-01",
                    price: "INR 3000",
                    category: "Music",
                    location: "Jio World Garden, BKC: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/haazri-a-r-rahman-live-in-concert/ET00414575'
                },
                {
                    id: 63,
                    name: "One Night feat. Anuv Jain",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407725-zuchqvalcz-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-20-12",
                    price: "INR 2000",
                    category: "Music",
                    location: "Nesco Center: Mumbai",
                    additionalDetails: {
                        time: "5:30 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/one-night-festival-ft-anuv-jain/ET00407725'
                },
                {
                    id: 64,
                    name: "Jigra",
                    description: "Jigra is the heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn`t set the world on fire to protect what`s theirs?",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 250",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/mumbai/movies/jigra/ET00370844'
                },
                {
                    id: 65,
                    name: "Bhool Bhuliyaa 3",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTUxLjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-upyfabkgaw-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 200",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 66,
                    name: "Kunal Kamra Live",
                    description: "Kunal Kamra performing live in your city!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410022-sgpmzakkyh-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-kunal-kamra-live-0-2024-8-30-t-10-51-53.jpg",
                    date: "2024-11-05",
                    price: "INR 950",
                    category: "Comedy",
                    location: "Auditorium: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/kunal-kamra-live/ET00410022'
                },
                {
                    id: 67,
                    name: "Smooth Kullu Smooth",
                    description: "Meet Aaditya Kulshreshth, aka Kullu—the man who turns everyday small-town life into laugh-out-loud moments! With his signature style that oozes nostalgia, Kullu takes you back to those relatable middle-class moments we`ve all lived through",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363579-mjunjfkfhw-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smooth-kullu-smooth-by-aaditya-kulshreshtha-0-2024-10-3-t-13-25-54.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Comedy",
                    location: "Rang Mandir: Bandra",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/smooth-kullu-smooth-by-aaditya-kulshreshtha/ET00363579'
                },
                {
                    id: 68,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 69,
                    name: "My Name Is JAAN",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    date: "2024-11-05",
                    price: "INR 249",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'
                },
                {
                    id: 70,
                    name: "Prithivi Theatre Festival 2024",
                    description: "39th Prithvi Theatre Festival. The spotlight returns to Mumbai’s cherished Prithvi Festival!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00415930-ghepnbqxmg-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prithvi-theatre-festival-2024-0-2024-10-14-t-5-39-5.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/prithvi-theatre-festival-2024/ET00415930'
                },


            ]
        },
        {
            city: "Kolkata",
            events: [
                {
                    id: 71,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 72,
                    name: "HAAZRI - A.R.Rahman",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-shygmdtapg-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2025-17-01",
                    price: "INR 3000",
                    category: "Music",
                    location: "Jio World Garden, BKC: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/haazri-a-r-rahman-live-in-concert/ET00414575'
                },
                {
                    id: 73,
                    name: "One Night feat. Anuv Jain",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407725-zuchqvalcz-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-20-12",
                    price: "INR 2000",
                    category: "Music",
                    location: "Nesco Center: Mumbai",
                    additionalDetails: {
                        time: "5:30 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/one-night-festival-ft-anuv-jain/ET00407725'
                },
                {
                    id: 74,
                    name: "Jigra",
                    description: "Jigra is the heart wrenching tale of a sister taking on the world to avenge her brother. Their odyssey of reunification tests their bond, their morals, and their inner strengths. Who wouldn`t set the world on fire to protect what`s theirs?",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 250",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/mumbai/movies/jigra/ET00370844'
                },
                {
                    id: 75,
                    name: "Bhool Bhuliyaa 3",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTUxLjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-upyfabkgaw-portrait.jpg",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "INR 200",
                    category: "Movies",
                    location: "Mumbai Theatre",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 76,
                    name: "Kunal Kamra Live",
                    description: "Kunal Kamra performing live in your city!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410022-sgpmzakkyh-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-kunal-kamra-live-0-2024-8-30-t-10-51-53.jpg",
                    date: "2024-11-05",
                    price: "INR 950",
                    category: "Comedy",
                    location: "Auditorium: Mumbai",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/kunal-kamra-live/ET00410022'
                },
                {
                    id: 77,
                    name: "Smooth Kullu Smooth",
                    description: "Meet Aaditya Kulshreshth, aka Kullu—the man who turns everyday small-town life into laugh-out-loud moments! With his signature style that oozes nostalgia, Kullu takes you back to those relatable middle-class moments we`ve all lived through",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363579-mjunjfkfhw-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smooth-kullu-smooth-by-aaditya-kulshreshtha-0-2024-10-3-t-13-25-54.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Comedy",
                    location: "Rang Mandir: Bandra",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/events/smooth-kullu-smooth-by-aaditya-kulshreshtha/ET00363579'
                },
                {
                    id: 78,
                    name: "Mumbai Music Festival",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    modalImage: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Music",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'

                },
                {
                    id: 79,
                    name: "My Name Is JAAN",
                    description: "Experience a full day of music with popular artists.",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414657-zhflvlmcen-portrait.jpg",
                    date: "2024-11-05",
                    price: "INR 249",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/my-name-is-jaan/ET00414657'
                },
                {
                    id: 80,
                    name: "Prithivi Theatre Festival 2024",
                    description: "39th Prithvi Theatre Festival. The spotlight returns to Mumbai’s cherished Prithvi Festival!",
                    cardImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00415930-ghepnbqxmg-portrait.jpg",
                    modalImage: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prithvi-theatre-festival-2024-0-2024-10-14-t-5-39-5.jpg",
                    date: "2024-11-05",
                    price: "Free",
                    category: "Plays",
                    location: "Mumbai Arena",
                    additionalDetails: {
                        time: "6:00 PM",
                        duration: "4 hours",
                        ageLimit: "18+"
                    },
                    link:'https://in.bookmyshow.com/plays/prithvi-theatre-festival-2024/ET00415930'
                },


            ]
        }
    ]
}

export default data
