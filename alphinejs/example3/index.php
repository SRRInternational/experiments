<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Count</title>
    <!-- <script src="./alpine-3.13.6/packages/alpinejs/builds/cdn.js"></script> -->
    <!-- <script src="//unpkg.com/alpinejs" defer></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.10.3/cdn.js" integrity="sha512-KnYVZoWDMDmJwjmoUEcEd//9bap1dhg0ltiMWtdoKwvVdmEFZGoKsFhYBzuwP2v2iHGnstBor8tjPcFQNgI5cA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<body>
    <div id="app" x-data="{ open: false,name:'', }" x-init="console.log('hello there')">
        <h1>Counter App</h1>

        <!-- Counter Display -->
        <div x-show="open" x-init="console.log('name')">
            <h1>hello <span x-text="name"></span></h1>
        </div>

        <!-- Buttons -->
        <div>
            <!-- <input type="text" x-model="name" placeholder="type something"> -->
            <button @click="open= !open ,name='aman'">show element</button>
            <!-- <button @click="count--">Decrement</button>
            <button @click="count = 0">Reset</button> -->

        </div>
    </div>


</body>

</html>