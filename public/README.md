# Example application for error happening when revalidating page

There are two pages in this project, `server-page-normal-rendering` and
that `server-page-get-server-side-props-rendering`. Both pages use `getServerSideProps`
and set the `Cache-Control` header. `revalidate-server-page-normal-rendering` uses the normal rendering flow,
while `revalidate-server-page-get-server-side-props-rendering` sets the response test in `getServerSideProps`. We use
the second approach in order to cache pages using the vercel infrastructure which we have not migrated to nextjs yet. 

There are two api calls, which revalidate the respective pages. The error happens in both cases:
** [`/api/revalidate-server-page-normal-rendering`](/api/revalidate-server-page-normal-rendering)**
```text
Error revalidating: Error: Failed to revalidate /server-page-normal-rendering: Invalid response 200
```
**  [`(/api/revalidate-server-page-get-server-side-props-rendering`](/api/revalidate-server-page-get-server-side-props-rendering)**
```text
Error revalidating: Error: Failed to revalidate /server-page-get-server-side-props-rendering: Invalid response 200
```


