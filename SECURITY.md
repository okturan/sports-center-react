# Security policy

## Supported version

Security fixes target the `main` branch and the current deployment linked from
the README. Historical commits and modified deployments are not supported
separately.

## Reporting a vulnerability

Please use [GitHub's private vulnerability reporting form](https://github.com/okturan/sports-center-react/security/advisories/new)
instead of opening a public issue. Include the affected page or input, clear
reproduction steps, the browser you tested, and the security impact.

Relevant reports include:

- script or markup injection through form fields or rendered BMI results;
- height, weight, or contact-form data leaving the browser despite the static
  demonstration boundary;
- an unsafe external link, embedded resource, dependency, build, or deployment
  path with a demonstrated impact.

BMI category disagreements, accessibility defects, responsive-layout bugs, and
the limitations of BMI as a health screening measure are normal product issues,
not security vulnerabilities. The application does not diagnose a condition,
store health records, book services, or submit the contact form to a backend.

Use invented measurements and contact details. Do not attach medical records,
credentials, personal information, or destructive payloads. The maintainer will
coordinate validation, remediation, and disclosure through the private
advisory.
