<svelte:head>
<script>
nl_pos="br";
nl_color="pink";
nl_compact="1";
nl_accordion="1"; 
</script> 
<script src="https://1lev1.com/nagishli.js?v=2.3"
charset="utf-8"
defer> 
</script> 
</svelte:head>

    <script>

    import {
        liUN
    } from '$lib/stores/liUN.js';
import {
    fbl
} from '$lib/stores/fbl.js';

import {
    lang
} from '$lib/stores/lang.js'
import {
    page
} from '$app/state'
//const emaili = page.url.searchParams.get('code')
import {
    goto
} from '$app/navigation';
import {
    userName
} from '$lib/stores/store.js';
import Amana1 from "$lib/components/main/amana.svelte"
import One from "$lib/components/main/bein.svelte"
import {
    show
} from '$lib/components/registration/store-show.js';
import {
    contriesi
} from '$lib/components/registration/contries.js';
import {
    fpval
} from '$lib/components/registration/fpval.js';
import {
    regHelper
} from '$lib/stores/regHelper.js';
import {
    onMount
} from 'svelte';
import {
    email
} from '$lib/components/registration/email.js'
import {
    linkos
} from '$lib/stores/linkos.js'
  import Amanaen from '$lib/components/main/amanaen.svelte';
  import Amanar from '$lib/components/main/amanar.svelte';

let idx = $state(1);
let error;
const baseUrl = import.meta.env.VITE_URL

let user = 0;

let kvar = $state();
onMount(async () => {
    const x = page.url.searchParams.get('ref')
    if (x != null) {
        userName.set(page.url.searchParams.get('un'))
        kvar = page.url.searchParams.get('em');
        email.set(page.url.searchParams.get('em'));
        //cuontry freeppid
        document.cookie = `email=${page.url.searchParams.get('em')}; expires=` + new Date(2026, 0, 1).toUTCString();
        document.cookie = `un=${page.url.searchParams.get('un')}; expires=` + new Date(2026, 0, 1).toUTCString();
        liUN.set(decodeURIComponent(page.url.searchParams.get('un')));
        const array = page.url.searchParams.get('con').split(',');

        contriesi.set(array)
        regHelper.set(1);
        fpval.set(page.url.searchParams.get('id'))
        console.log(x, kvar, user, $contriesi)

    }
    if (document.cookie) {

        const unt = document.cookie
            .split('; ')
            .find(row => row.startsWith('un='))
        if (unt != null) {
            const un = document.cookie
                .split('; ')
                .find(row => row.startsWith('un='))
                .split('=')[1];
            userName.set(decodeURIComponent(un));
        }
        const regt = document.cookie
            .split('; ')
            .find(row => row.startsWith('id='))
        if (regt != null) {
            const reg = document.cookie
                .split('; ')
                .find(row => row.startsWith('id='))
                .split('=')[1];

            user = reg;
        }
        const cookieValuet = document.cookie
            .split('; ')
            .find(row => row.startsWith('email='))
        if (cookieValuet != null) {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith('email='))
                .split('=')[1];
            kvar = cookieValue;
            email.set(cookieValue);
        }
        const cookieValueti = document.cookie
            .split('; ')
            .find(row => row.startsWith('await='))
        if (cookieValueti != null) {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith('await='))
                .split('=')[1];
            kvar = true
            show.set(6)
        }
    }
 
    //console.log(emaili)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js', {
            scope: '/'
        }).then(function(reg) {
            // registration worked
            console.log('Registration succeeded. Scope is ' + reg.scope);
        }).catch(function(error) {
            // registration failed
            console.log('Registration failed with ' + error);
        });

    };
    let error1, fppp
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);
    const checkStatus = (resp) => {
        if (resp.status >= 200 && resp.status < 300) {
            return resp;
        }
        return parseJSON(resp).then((resp) => {
            throw resp;
        });
    };
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const res = await fetch(baseUrl+"/graphql", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `query {
  chezins { 
   meta {
      pagination {
        total
      }
    }
  }
}
              `
                })
            }).then(checkStatus)
            .then(parseJSON);
        fppp = res.data.chezins

        idx = fppp.meta.pagination.total
    } catch (e) {
        error1 = e
    }

});

let regHelperL = $state(-1);

regHelper.subscribe(value => {
    regHelperL = value;
});

/*function toggle() {

regHelperL = 0;
    show.set(0);
    regHelper.set(0)

}*/
function beforeUnload(event) {
    // Cancel the event as stated by the standard.

    // Chrome requires returnValue to be set.
    // let fgf = false
    if ($fbl == true) {
        event.returnValue = null;
        let data = {
            name: `${$userName}  who speak ${$lang}`,
            action: `${regHelperL == 1 ? "sing": "not sign"} and mail = ${$email}`,
            data: $linkos
        } //username email projectname projectsrc lang openmissionName
        fetch('/api/ste', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => response)
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    // more compatibility
    return null
}
</script>


<div class="main">

  {#if kvar}
<One {idx} />
{:else}
{#if regHelperL == 1}
<One {idx}/>

{:else if regHelperL == 0}
{#if $lang == "he"}
<Amana1  {idx}/>
{:else if $lang == "ar"}
<Amanar {idx}/>
{:else}
<Amanaen {idx}/>
{/if}

{/if}

{/if}
 </div>

<style>
:root {
    --primary-light: #a6f9d6;
    --primary: #5be2a9;
    --primary-dark: #53ce9a;
    --secondary: #1e2145;
    --white: #fff;
    --grey: #e6e6ff;
    --grey-dark: #6d7098;
    --red: #ff6b6b;
}

*,
*:after,
*:before {
    box-sizing: border-box;
}

@media (min-width: 1100px) {

    .main {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        margin: 0px;
        background-image: url(https://res.cloudinary.com/love1/image/upload/v1639597594/Prismatic-Hearts-World-Map-4_ge7z9u.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

@media (max-width: 1099px) {
    .main {
        flex: 1;
        display: flex;
        flex-direction: column;

    }
}

@media (max-width: 720px) {
    .main {
        flex: 1;
        display: flex;
        width: 100vw;
        padding: 0;
    }
}
</style>
